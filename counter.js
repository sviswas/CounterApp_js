let counter_id=document.getElementById("counter_id");
function increase()
{
    let prev_count=parseInt(counter_id.textContent)
    let update_value=prev_count+1
    counter_id.textContent=update_value
    if(update_value>0)
    {
        counter_id.style.color="#83f158";
    }
    else if(update_value<0)
    {
        counter_id.style.color="red";
    }
    else{
        counter_id.style.color="#c0c9cf";
    }
    localStorage.setItem("name",counter_id.textContent)
    
}
function decrease()
{
    let prev_count=parseInt(counter_id.textContent)
    let update_value=prev_count-1
    counter_id.textContent=update_value
    if(update_value>0)
    {
        counter_id.style.color="#83f158";
    }
    else if(update_value<0)
    {
        counter_id.style.color="red";
    }
    else{
        counter_id.style.color="#c0c9cf";
    }
    localStorage.setItem("name",counter_id.textContent)
    
}            
function reset()
{
    let update_value=0
    counter_id.textContent=update_value
    counter_id.style.color="#c0c9cf";
    localStorage.setItem("name",counter_id.textContent)
    
}
l=localStorage.getItem("name");
if(l==null){
    counter_id.textContent=0; 
}
else{
    let k=l 
    if(k>0)
    {
        counter_id.style.color="#83f158";
    }
    else if(k<0)
    {
        counter_id.style.color="red";
    }
    else{
        counter_id.style.color="#c0c9cf";
    }
    counter_id.textContent=k;
    
}