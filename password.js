const password = (size, low, up, num, spacial)=>{
    let lower = "abcdefghijklmnopqrstuvwxyz"
    let upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let number = "0123456789"
    let char = `!@#$%&`

    let pass =``
    if(low){
        pass += lower
    }
    if(up){
        pass += upper
    }
    if(num){
        pass += number
    }
    if(spacial){
        pass += char
    }
    if (pass==0){
        alert("Please click checkbox before use")
        return

    }

    let password1=``
    for (let i=0; i<size;i++){
        let random = Math.floor(Math.random()*pass.length)
        password1 += pass[random]
    }
    // console.log(password1)
    let text=document.getElementById("txt")
    text.value=`${password1}`
 }

const generate = ()=>{
    let size = document.getElementById("size").value
    let low=document.getElementById("lower").checked
    let up=document.getElementById("upper").checked
    let num=document.getElementById("number").checked
    let spacial=document.getElementById("special").checked

    password(size, low, up, num, spacial)

}
const reset1=()=>{
    (document.getElementById("size")).value ="7"
    document.getElementById("txt").value ="Here Is Your Password"
    document.getElementById("lower").checked = true
    document.getElementById("upper").checked = true
    document.getElementById("number").checked = true
    document.getElementById("special").checked = true
}
let gen= document.getElementById("generate")
gen.addEventListener("click", function(){
    generate()
})
let rst = document.getElementById("reset")
rst.addEventListener("click", ()=>{
    reset1()
})