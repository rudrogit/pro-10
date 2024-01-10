let sear = document.querySelector('#search')
let searchactive = document.querySelector('.search-input')
let forms = document.querySelector('#formbut')
let formactive =document.querySelector('.forms')
let opennav =document.querySelector('#open-nav')
let closenav =document.querySelector('#close-nav')
let activenav =document.querySelector('#active-ul')


sear.addEventListener('click',(e)=>{
   e.preventDefault()
   searchactive.classList.add('search-active')
   formactive.classList.remove('form-active')
   activenav.classList.remove('nav-ul-active')
})

forms.addEventListener('click',(e)=>{
    e.preventDefault()
    formactive.classList.add('form-active')
    searchactive.classList.remove('search-active')
    activenav.classList.remove('nav-ul-active')
 })
 opennav.addEventListener('click',(e)=>{
    e.preventDefault()
    activenav.classList.add('nav-ul-active')
    formactive.classList.remove('form-active')
    searchactive.classList.remove('search-active')
    opennav.style.display = 'none'
    closenav.style.display = 'block'
 })
 closenav.addEventListener('click',(e)=>{
    e.preventDefault()
    activenav.classList.remove('nav-ul-active')
    formactive.classList.remove('form-active')
    searchactive.classList.remove('search-active')
    opennav.style.display = 'block'
    closenav.style.display = 'none'
 })

window.addEventListener('scroll', ()=>{
    activenav.classList.remove('nav-ul-active')
    searchactive.classList.remove('search-active')
    formactive.classList.remove('form-active')
}) 

var typed = new Typed('#tex',{
    strings:['web designer','youtuber', 'programar','web devoloper'],
    typeSpeed:90,
    backSpeed:90, 
})
