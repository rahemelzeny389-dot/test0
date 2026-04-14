 var box = document.getElementById("box-main");

function showDiv() {
  box.classList.remove("opacity-0", "scale-95");
}

function hideDiv() {
  box.classList.add("opacity-0", "scale-95");
}
 
 

 
 
function selectSize(el) {
   
  const parent = el.parentElement;

  
  parent.querySelectorAll(".size").forEach(item => {
    item.classList.remove("active");
  });

   
  el.classList.add("active");
}


  
function flip(el) {
  el.classList.toggle("flipped");
}
  