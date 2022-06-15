// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function likeHeart(){
  const error=document.querySelector('#modal');
  error.classList.add('hidden');
  const heart=document.querySelectorAll('.like-glyph');
  for(let i=0;i<heart.length;i++){
    heart[i].addEventListener('click',(e)=>{
      mimicServerCall()
      .then((res)=>{
        console.log(res)
        if(e.target.classList.contains('activated-heart')){
          e.target.classList.remove('activated-heart');
          e.target.innerText=EMPTY_HEART;
        }else{
          e.target.innerText=FULL_HEART;
          const heart=e.target.classList;
          heart.add('activated-heart');

        }

       
      })
      .catch((err)=>{
       error.classList.remove('hidden')
       error.innerText=err.message
       setTimeout(()=>{
        error.classList.add('hidden')   
       },3000)
       
      })
  
    })  
    
  }
  

}
likeHeart()



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
