import { useEffect, useState } from "react"
import '../css/AdviceApp.css'
export const AdviceApp = () => {
    const[advice,setadvice]=useState("please click button to get advice");
    const[count,setcount]=useState(0);
    async function getAdvice()
    {
const res=await fetch("https://api.adviceslip.com/advice");
const data=await res.json();
//console.log(data);
setadvice(data.slip.advice);
setcount((c)=>c+1);
    }

    useEffect(function(){
getAdvice();
    },[])
  return (
    <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice}>Get Advice</button>
        <h4>you have read <b>{count}</b> pieces of advice</h4>
    </div>
  )
}
