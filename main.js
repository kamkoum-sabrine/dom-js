/**Variables globales */
let btn 
let everyMinutes 
let minutes
let hours
let dayMonth
let month
let dayWeek
/**Fonctions */
function generateValue() {
    if ((minutes === undefined)||(hours === undefined)||(dayMonth === undefined)||(dayWeek === undefined)||(month === undefined)){
        alert("Please select a valid value")
    }
    let div = document.getElementById("res")
   div.innerHTML = "Minutes"+" = "+minutes+"<br>Hours"+" = "+hours+"<br>Day month"+" = "+dayMonth+"<br>Month"+" = "+month+"<br>Day week"+" = "+dayWeek
   
    
    
}
function getMinutes(id) {
    console.log(id)
    minutes = id
    // if (id=="other"){
    //     console.log("other")
    //     other=id
        
        //otherMinutes(value)
    // }
}
function otherMinutes(other) {
    let list  = document.getElementById(other)
    console.log(list.value)
    minutes = list.value
   
    
}
function getHours(id) {
    console.log(id)
    hours = id
    // if (id=="other"){
    //     console.log("other")
    //     other=id
        
        //otherMinutes(value)
    // }
}
function otherHours(other) {
    let list  = document.getElementById(other)
    console.log(list.value)
    hours = list.value
   
    
}
function getDayMonth(id) {
    console.log(id)
    dayMonth = id
    // if (id=="other"){
    //     console.log("other")
    //     other=id
        
        //otherMinutes(value)
    // }
}
function otherDayMonth(other) {
    let list  = document.getElementById(other)
    console.log(list.value)
    dayMonth = list.value
   
    
}
function getMonth(id) {
    console.log(id)
    month = id
    // if (id=="other"){
    //     console.log("other")
    //     other=id
        
        //otherMinutes(value)
    // }
}
function otherMonth(other) {
    let list  = document.getElementById(other)
    console.log(list.value)
    month = list.value
   
    
}
function getDayWeek(id) {
    console.log(id)
    dayWeek = id
    // if (id=="other"){
    //     console.log("other")
    //     other=id
        
        //otherMinutes(value)
    // }
}
function otherDayWeek(other) {
    let list  = document.getElementById(other)
    console.log(list.value)
    dayWeek = list.value
   
    
}


/**Code principal */
btn = document.getElementById("generate")
btn.addEventListener("click", generateValue)