window.onload = function() {
  let body = document.querySelector("body");
  body.style.display = "block";
};

let homebutt = document.querySelector(".hm");
let ImpLinksbutt = document.querySelector(".il");
let staffbutt = document.querySelector(".stff");
let contactbutt = document.querySelector(".conc");
let classesbutt = document.querySelector(".oc");
let annbutt = document.querySelector(".ann");
let cirsbutt = document.querySelector(".cr"); 

let admbutt = document.querySelector(".announcements .adm_butt");
let resbutt = document.querySelector(".announcements .res_butt");
let newsbutt = document.querySelector(".announcements .news_butt");
let news = document.querySelector(".announcements .news");
let res = document.querySelector(".announcements .res");
let adm = document.querySelector(".announcements .adm");

let firstyrclaases = document.querySelector(".clss .one ul");
let secondyrclaases = document.querySelector(".two ul");


let home = document.querySelector(".home")
let online = document.querySelector(".online")
let staff = document.querySelector(".staff") 
let impLinks = document.querySelector(".implinks")
let announcements = document.querySelector(".announcements")
let contact = document.querySelector(".contact")
let circulars = document.querySelector(".circulars")

homebutt.addEventListener("click",()=>{
   firstyrclaases.classList.remove("left");
   secondyrclaases.classList.remove("right");
   home.style.display="block";
   online.style.display="none";
   staff.style.display="none";
   impLinks.style.display="none";
   announcements.style.display="none";
   contact.style.display="none";
   circulars.style.display="none";
})

staffbutt.addEventListener("click",()=>{ 
   home.style.display="none";
   online.style.display="none";
   staff.style.display="block";
   impLinks.style.display="none";
   announcements.style.display="none";
   contact.style.display="none";
   circulars.style.display="none";
})

ImpLinksbutt.addEventListener("click",()=>{
   home.style.display="none";
   online.style.display="none";
   staff.style.display="none";
   impLinks.style.display="block";
   announcements.style.display="none";
   contact.style.display="none";
   circulars.style.display="none";
})

annbutt.addEventListener("click",()=>{
  home.style.display="none";
  online.style.display="none";
  staff.style.display="none";
  impLinks.style.display="none";
  announcements.style.display="block";
  contact.style.display="none";
  circulars.style.display="none";
})

classesbutt.addEventListener("click",()=>{ 
  firstyrclaases.classList.add("left");
   secondyrclaases.classList.add("right");
  home.style.display="none";
  online.style.display="block";
  staff.style.display="none";
  impLinks.style.display="none";
  announcements.style.display="none";
  contact.style.display="none";
  circulars.style.display="none";
})

contactbutt.addEventListener("click",()=>{
  home.style.display="none";
  online.style.display="none";
  staff.style.display="none";
  impLinks.style.display="none";
  announcements.style.display="none";
  contact.style.display="block";
  circulars.style.display="none";
})

cirsbutt.addEventListener("click",()=>{
  home.style.display="none";
  online.style.display="none";
  staff.style.display="none";
  impLinks.style.display="none";
  announcements.style.display="none";
  contact.style.display="none";
  circulars.style.display="block";
})


//   Announcements 

admbutt.addEventListener("click",()=>{ 
   admbutt.classList.add("checked"); 
   resbutt.classList.remove("checked");
   newsbutt.classList.remove("checked");
   adm.style.display="block";
   res.style.display="none";
   news.style.display="none";
})

resbutt.addEventListener("click",()=>{
  admbutt.classList.remove("checked"); 
   resbutt.classList.add("checked");
   newsbutt.classList.remove("checked");
  adm.style.display="none";
  res.style.display="block";
  news.style.display="none";
})

newsbutt.addEventListener("click",()=>{
  admbutt.classList.remove("checked"); 
   resbutt.classList.remove("checked");
   newsbutt.classList.add("checked");
  adm.style.display="none";
  res.style.display="none";
  news.style.display="block";
})


// ImpLinks.addEventListener("click", () => {
//   ImpLinks.classList.add("active");
//   staff.classList.remove("active");
//   contact.classList.remove("active");
//   classes.classList.remove("active");
//   ann.classList.remove("active");
//   cirs.classList.remove("active");
//   if (displayimp == "none") {
//     displayconc = "none";
//     displaystf = "none";
//     displayoc = "none";
//     displayann = "none";
//     displaycirs = "none";
//     info.style.display = "block";
//     displayimp = "block";
//     info.innerHTML = `<h2> Important Links</h2> <div class="line"></div> <p>This is Important links</p>`;
//   } else {
//     info.style.display = "none";
//     displayimp = "none";
//     ImpLinks.classList.remove("active");
//   }
// });

// staff.addEventListener("click", () => {
//   ImpLinks.classList.remove("active");
//   staff.classList.add("active");
//   contact.classList.remove("active");
//   classes.classList.remove("active");
//   ann.classList.remove("active");
//   cirs.classList.remove("active");
//   if (displaystf == "none") {
//     displayconc = "none";
//     displayoc = "none";
//     displayann = "none";
//     displaycirs = "none";
//     displayimp = "none";
//     info.style.display = "block";
//     displaystf = "block";
//     info.innerHTML = `<h2> Staff Portal </h2> <div class="line"></div> <p>This is staff portal</p>`;
//   } else {
//     info.style.display = "none";
//     displaystf = "none";
//     staff.classList.remove("active");
//   }
// });

// contact.addEventListener("click", () => {
//   ImpLinks.classList.remove("active");
//   staff.classList.remove("active");
//   contact.classList.add("active");
//   classes.classList.remove("active");
//   ann.classList.remove("active");
//   cirs.classList.remove("active");
//   if (displayconc == "none") {
//     displaystf = "none";
//     displayoc = "none";
//     displayann = "none";
//     displaycirs = "none";
//     displayimp = "none";
//     info.style.display = "block";
//     displayconc = "block";
//     info.innerHTML = `<h2> Contact Us: </h2><div class="line"></div> <p>Government Junior College, Narnoor, Adilabad Dist-504311</p><p>Mobile no: 94416448962 , 7981223264</p><p>Email: gjcnarnoor@gmail.com</p>`;
//   } else {
//     info.style.display = "none";
//     displayconc = "none";
//     contact.classList.remove("active");
//   }
// });

// classes.addEventListener("click", () => {
//   ImpLinks.classList.remove("active");
//   staff.classList.remove("active");
//   contact.classList.remove("active");
//   classes.classList.add("active");
//   ann.classList.remove("active");
//   cirs.classList.remove("active");
//   if (displayoc == "none") {
//     displaystf = "none";
//     displayconc = "none";
//     displayann = "none";
//     displaycirs = "none";
//     displayimp = "none";
//     info.style.display = "block";
//     displayoc = "block";
//     info.innerHTML = `<h2> Online Classes: </h2><div class="line"></div> 
    // <div class="clss">
    //   <div class="one">
    //    <h3 style="font-family:sans-serif;">First Year</h3>
    //    <ul type="none">
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+telugu">Telugu I </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+hindi">Hindi I </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+english">English I</a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+botony">Botany I</a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+zoology">Zoology I </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+physics">Physics I </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+chemistry">Chemistry I </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+civics">Civics I </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+economics">Economics I </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+commerce">Commerce I </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+first+year+history">History I </a></li>
    //    </ul>
    //   </div>
    //   <div class="two">
    //     <h3 style="font-family:sans-serif;">Second Year</h3>
    //     <ul type="none">
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+telugu">Telugu II </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+hindi">Hindi II </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+english">English II</a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+botony">Botany II</a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+zoology">Zoology II </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+physics">Physics II </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+chemistry">Chemistry II </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+civics">Civics II </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+economics">Economics II </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+commerce">Commerce II </a></li>
    //       <li><a href="https://www.youtube.com/results?search_query=dd+yadagiri+inter+second+year+history">History II </a></li>
    //     </ul>
    //   </div>
    // </div>`;
//   } else {
//     info.style.display = "none";
//     displayoc = "none";
//     classes.classList.remove("active");
//   }
// });

// ann.addEventListener("click", () => {
//   ImpLinks.classList.remove("active");
//   staff.classList.remove("active");
//   contact.classList.remove("active");
//   classes.classList.remove("active");
//   ann.classList.add("active");
//   cirs.classList.remove("active");
//   if (displayann == "none") {
//     displaystf = "none";
//     displayconc = "none";
//     displayoc = "none";
//     displaycirs = "none";
//     displayimp = "none";
//     info.style.display = "block";
//     displayann = "block";
//     info.innerHTML = `<h2>Announcements: </h2><div class="line"></div> <p>Announcements </p> `;
//   } else {
//     info.style.display = "none";
//     displayann = "none";
//     ann.classList.remove("active");
//   }
// });

// cirs.addEventListener("click", () => {
//   ImpLinks.classList.remove("active");
//   staff.classList.remove("active");
//   contact.classList.remove("active");
//   classes.classList.remove("active");
//   ann.classList.remove("active");
//   cirs.classList.add("active");
//   if (displaycirs == "none") {
//     displaystf = "none";
//     displayconc = "none";
//     displayoc = "none";
//     displayann = "none";
//     displayimp = "none";
//     info.style.display = "block";
//     displaycirs = "block";
//     info.innerHTML = `<h2>Circulars: </h2><div class="line"></div> <p>Circulars</p>`;
//   } else {
//     info.style.display = "none";
//     displaycirs = "none";
//     cirs.classList.remove("active");
//   }
// });
