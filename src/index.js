fetch('http://localhost:3000/ramens')
.then(response => response.json())
.then(ramenData =>{
    ramenData.forEach(ramen => displayRamen(ramen))
})


function displayRamen(ramen){
    const ramenMenu = document.querySelector('#ramen-menu')
    const image = document.createElement('img')
    image.src = ramen.image
    ramenMenu.append(image)

    image.addEventListener('click',()=>{
        const detailImage = document.querySelector('.detail-image')
        const name = document.querySelector('.name')
        const restaurant = document.querySelector('.restaurant')
        const ratingDisplay = document.querySelector('#rating-display')
        const commentDisplay = document.querySelector('#comment-display')

        detailImage.src = ramen.image
        name.textContent = ramen.name
        restaurant.textContent = ramen.restaurant
        ratingDisplay.textContent = ramen.rating
        commentDisplay.textContent = ramen.comment
    })

}
document.querySelector('#new-ramen').addEventListener('submit',(event)=>{
    event.preventDefault()

    displayRamen({
        "name": event.target.name.value,
        "restaurant": event.target.restaurant.value,
        "image": event.target.image.value,
        "rating": event.target.rating.value,
        "comment": event.target['new-comment'].value
    })
    event.target.reset()
})