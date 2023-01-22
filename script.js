console.log("Welcome to Spotify");
let songindex=0;
let audioelement =new Audio('2.mp3');
let masterplay=document.getElementById('masterplay');
let masterplay1=document.getElementById('masterplay1');
let bar=document.getElementById('bar');
let gif=document.getElementById('gif');
let songitem =Array.from( document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Guilty",filePath:"1.mp3",coverPath:"cover 1.jpg"},
    {songName:"Guilty",filePath:"2.mp3",coverPath:"cover2.jpg"},
    {songName:"Guilty",filePath:"3.mp3",coverPath:"cover3.jpg"},
    {songName:"Guilty",filePath:"4.mp3",coverPath:"cover4.avif"},
    {songName:"Guilty",filePath:"5.mp3",coverPath:"cover 1.jpg"},
    {songName:"Guilty",filePath:"6.mp3",coverPath:"cover2.jpg"},
    {songName:"Guilty",filePath:"7.mp3",coverPath:"cover3.jpg"},
    {songName:"Guilty",filePath:"8.mp3",coverPath:"cover4.avif"}
]
songitem.forEach((element,i )=> {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
   
});

masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        gif.style.op1;
    }
})
masterplay1.addEventListener('click',()=>{
    if(audioelement.play || audioelement.current1){
        audioelement.pause();
        gif.style.opacity=0;
    }
})
audioelement.addEventListener('timeupdate',()=>{
  
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    bar.value=progress;
})
bar.addEventListener('change',()=>{
    audioelement.currentTime=bar.value*audioelement.duration/100;
})
const makeallPlay=()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((element)=>{

    })
}
Array.from(document.getElementsByClassName("songitem")).forEach(
    (element, i) => {
      element.addEventListener("click", (e) => {
        makeallPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
        audioelement.src = `${index}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
       
      });
    }
  );
  document.getElementById("next").addEventListener("click", () => {
    if (songindex >= songitem.lenght-1) {
      songindex = 0;
    } else {
      songindex +=1;
    }
    audioelement.src = `${songindex+1}.mp3`;
    songName.innerText = songs[songindex].songName;
    audioelement.currentTime = 0;
    gif.style.opac1;
    audioelement.play();
    
  });
  document.getElementById("back").addEventListener("click", () => {
    if (songindex <= 0) {
      songindex = 0;
    } else {
      songindex -=1;
    }
    audioelement.src = `${songindex+1}.mp3`;
    songName.innerText = songs[songindex].songName;
    audioelement.currentTime = 0;
    gif.style.opac1;
    audioelement.play();
    
  });

