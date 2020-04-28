
const red=document.querySelector('.menu__panel__red');
const blue=document.querySelector('.menu__panel__blue');
const green=document.querySelector('.menu__panel__green');
const black=document.querySelector('.menu__panel__black');
const yellow=document.querySelector('.menu__panel__yellow');
const brown=document.querySelector('.menu__panel__brown');
const orange=document.querySelector('.menu__panel__orange')
const pink=document.querySelector('.menu__panel__pink');
const violet=document.querySelector('.menu__panel__violet')
const grey=document.querySelector('.menu__panel__grey')

const eraser=document.querySelector('.fa-eraser')

let duud=false
let greyActive=false
let violetActive=false
let pinkActive=false
let orangeActive=false
let brownActive=false
let yellowActive=false
let blackActive=false
let greenActive=false
let blueActive=false
let redActive=false
let eraserActive=false


const startDown=()=>{
 duud=!duud
}
const greyOn=()=>{
 greyActive=true; violetActive=false; pinkActive=false; orangeActive=false; brownActive=false; yellowActive=false; blackActive=false; greenActive=false; blueActive=false; redActive=false;easer=false;
}
const violetOn=()=>{
 greyActive=false; violetActive=true; pinkActive=false; orangeActive=false; brownActive=false; yellowActive=false; blackActive=false; greenActive=false; blueActive=false; redActive=false;easer=false;
}
const pinkOn=()=>{
 greyActive=false; violetActive=false; pinkActive=true; orangeActive=false; brownActive=false; yellowActive=false; blackActive=false; greenActive=false; blueActive=false; redActive=false;easer=false;
}
const orangeOn=()=>{
 greyActive=false; violetActive=false; pinkActive=false; orangeActive=true; brownActive=false; yellowActive=false; blackActive=false; greenActive=false; blueActive=false; redActive=false;easer=false;
}
const brownOn=()=>{
 greyActive=false; violetActive=false; pinkActive=false; orangeActive=false; brownActive=true; yellowActive=false; blackActive=false; greenActive=false; blueActive=false; redActive=false;easer=false;
}
const yellowOn=()=>{
 greyActive=false; violetActive=false; pinkActive=false; orangeActive=false; brownActive=false; yellowActive=true; blackActive=false; greenActive=false; blueActive=false; redActive=false;easer=false;
}
const blackOn=()=>{
 greyActive=false; violetActive=false; pinkActive=false; orangeActive=false; brownActive=false; yellowActive=false; blackActive=true; greenActive=false; blueActive=false; redActive=false;easer=false;
}
const greenOn=()=>{
 greyActive=false; violetActive=false; pinkActive=false; orangeActive=false; brownActive=false; yellowActive=false; blackActive=false; greenActive=true; blueActive=false; redActive=false;easer=false;
}
const blueOn=()=>{
 greyActive=false; violetActive=false; pinkActive=false; orangeActive=false; brownActive=false; yellowActive=false; blackActive=false; greenActive=false; blueActive=true; redActive=false;easer=false;
}
const redOn=()=>{
 greyActive=false; violetActive=false; pinkActive=false; orangeActive=false; brownActive=false; yellowActive=false; blackActive=false; greenActive=false; blueActive=false; redActive=true;easer=false;
}
const eraserOn=()=>{
 greyActive=false; violetActive=false; pinkActive=false; orangeActive=false; brownActive=false; yellowActive=false; blackActive=false; greenActive=false; blueActive=false; redActive=false;
 eraserActive=true;
console.log('działa')

}

const startMove=(e)=>{
    if(duud){
        const element=document.createElement('div');
        document.body.appendChild(element);
        element.classList.add('paind__brush')
        element.style.top=`${e.clientY}px`;
        element.style.left=`${e.clientX}px`;
        if(eraserActive==true){
            element.style.backgroundColor="white";
            element.style.width='40px'
            element.style.height='40px'
        }
        if(greyActive==true){
            element.style.backgroundColor="grey";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(violetActive==true){
            element.style.backgroundColor="violet";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(pinkActive==true){
            element.style.backgroundColor="pink";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(orangeActive==true){
            element.style.backgroundColor="orange";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(brownActive==true){
            element.style.backgroundColor="brown";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(yellowActive==true){
            element.style.backgroundColor="yellow";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(blackActive==true){
            element.style.backgroundColor="black";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(greenActive==true){
            element.style.backgroundColor="green";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(blueActive==true){
            element.style.backgroundColor="blue";
            element.style.width='10px'
            element.style.height='10px'
        }
        if(redActive==true){
            element.style.backgroundColor="red";
            element.style.width='10px'
            element.style.height='10px'
        }
    }
}
const startUp=()=>{
 duud=!duud
}

grey.addEventListener('click',greyOn)
violet.addEventListener('click',violetOn)
pink.addEventListener('click',pinkOn)
orange.addEventListener('click',orangeOn)
brown.addEventListener('click',brownOn)
yellow.addEventListener('click',yellowOn)
black.addEventListener('click',blackOn)
green.addEventListener('click',greenOn)
blue.addEventListener('click',blueOn)
red.addEventListener('click',redOn)
eraser.addEventListener('click',eraserOn)
window.addEventListener('mousedown', startDown)
window.addEventListener('mousemove', startMove)
window.addEventListener('mouseup', startUp)
