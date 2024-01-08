var istatus = document.querySelector('h5')
var addFrind = document.querySelector('#add')
var check =0;
// var removeFriend = document.querySelector('#remove')


// addFrind.addEventListener('click',function(){
//     istatus.innerHTML='Friends'
//     istatus.style.color='green'
// })

// removeFriend.addEventListener('click',function(){
//     istatus.innerHTML='Stranger'
//     istatus.style.color='red'
// })


// now with single button 

addFrind.addEventListener('click',function(){
    if(check==0){
        istatus.innerHTML='Friends'
        istatus.style.color='green'
        addFrind.innerHTML='Remove friend'
        check=1;
    }
    else{
        istatus.innerHTML='Strangers'
        istatus.style.color='red'
        addFrind.innerHTML='Add friend'
        check=0;
    }
})