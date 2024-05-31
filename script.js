const headerLinks = document.querySelectorAll('.header__link')
const styleLink = document.querySelector('.styleLink')
console.log(styleLink.href)

console.log(headerLinks)


headerLinks.forEach(Element=>{
    
    console.log(Element.href)
    Element.addEventListener('click', (event)=>{
       styleLink.href = Element.href;
       console.log('sfsd')
       event.preventDefault();
       return false;
    },false)
})
