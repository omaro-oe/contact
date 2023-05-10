function changeNav(){
    let navBar=document.getElementById("navbar");
    let scrollValue=window.scrollY;
    if(scrollValue<150){
        navBar.classList.remove("fixedbar");
        document.getElementById("removeborder").style.border="1px solid rgba(48,146,85,0.25)";
    }else{
        navBar.classList.add("fixedbar");
        document.getElementById("removeborder").style.border="none";
        document.getElementById("removeborder").style.marginTop="0";
    }
}
window.addEventListener("scroll",changeNav);

let openMenu=document.getElementById("open");
let closeMenu=document.getElementById("close");
openMenu.addEventListener('click',openAside);
closeMenu.addEventListener('click',closeAside);

function openAside(){
document.getElementById("aside").style.left="0"
}
function closeAside(){
    document.getElementById("aside").style.left="-305px"
    }