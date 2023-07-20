const sliderContainer=document.querySelector('.slider-container');
const slideRight=document.querySelector('.right-slide');
const slideLeft=document.querySelector('.left-slide');
const upButton=document.querySelector('.up-buttons');
const downButton=document.querySelector('.down-buttons');

const slideLength=slideRight.querySelectorAll('div').length;
// console.log(slideLength);

let activeSlideIndex=0;
slideLeft.style.top=`-${(slideLength - 1)*100}vh`;

upButton.addEventListener('click',()=> changesSlide('up'))
downButton.addEventListener('click',()=> changesSlide('down'))

const changesSlide=(direction)=>{
    const slideHeight= sliderContainer.clientHeight;
    console.log(slideHeight);
    if(direction==='up'){
        activeSlideIndex++;
        if(activeSlideIndex>slideLength-1){
            activeSlideIndex=0;
        }
    }
    else {
        activeSlideIndex--;
        if(activeSlideIndex<0){
            activeSlideIndex=slideLength-1;
        }
    }
    
    slideLeft.style.transform=`translateY(${activeSlideIndex*slideHeight}px)`;
    slideRight.style.transform=`translateY(-${activeSlideIndex*slideHeight}px)`;
}