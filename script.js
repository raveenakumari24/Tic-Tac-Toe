let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-game");
let msgconatiner=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let turnO=true; //playerX, playerO

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.style.color="#5D2F77";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="#E45A92";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgconatiner.classList.add("hide");
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgconatiner.classList.remove("hide");
    disableBoxes();
};

const showDraw=()=>{
    msg.innerText="It's a Draw!";
    msgconatiner.classList.remove("hide");
};

const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
    let count=0;
    for(let box of boxes){
        if(box.innerText!==""){
            count++;
        }
    }
    if(count===9){
        showDraw();
    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);