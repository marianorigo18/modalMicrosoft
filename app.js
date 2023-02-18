const boxContent = document.querySelector('.box-container');
const containerModal = document.querySelector('.container-modal');

boxContent.addEventListener('click', (e)=> {
    const cuadrado = e.target.classList.contains('cuadrado');
    if(cuadrado){
        containerModal.classList.add('open-modal')
    }
});

containerModal.addEventListener('click', (e) => {
    const btnClose = e.target.classList.contains('btn-close');
    const fueraDelModal = e.target.classList.contains('container-modal');
    const btnCloseTwo = e.target.classList.contains('btn-close-two');

    if(btnClose || fueraDelModal || btnCloseTwo){
        containerModal.classList.remove('open-modal')
    }
})
