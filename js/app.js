const ulElement = document.querySelector('#primaryNav')
const toggleBtn = document.querySelector('#hamburgerBtn')
toggleBtn.addEventListener('click', () => {
    ulElement.classList.toggle('open')
})