// selecting the element of HTMl
const closedface=document.querySelector('.closed');
const openface=document.querySelector('.open')
// Adding event listeners
//so by clicking the closed face we will execute the function.
closedface.addEventListener('click', ()=>{
    if(openface.classList.contains('open')){
        openface.classList.add('active')
        closedface.classList.remove('active')
    }
})
openface.addEventListener('click', ()=>{
    if(openface.classList.contains('active')){
        openface.classList.remove('active')
        closedface.classList.add('active')
    }
})