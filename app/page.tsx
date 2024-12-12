"use client";
import { useState } from "react";


function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Home() {
  const [number, setNumber] = useState(2);
  const [intervalo, setIntervalo] = useState(2000);
  const Movimiento = () => {
    const randomNumber = randomIntFromInterval(1, 4);
    setNumber(randomNumber);
  }

  if(intervalo <= 0){
    setIntervalo(1000);
  }

  setTimeout(() => {
   
      Movimiento();
  
  }, intervalo)


  return (
    <div className="w-full flex items-center justify-center min-h-screen text-center ">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <p>intervalo:</p>
          <input type="text" value={intervalo} onChange={(e) => setIntervalo(parseInt(e.target.value))} min={100} max={10000} className="text-[50px] bg-transparent font-bold"/>
        </div>
      <h1 className="text-[500px] font-bold">{number}</h1>
      <p className="text-[100px] font-bold">{number ==1 ? "Adelante" : number == 2 ? "Retrocede" : number == 3 ? "Izquierda" : number == 4 ? "Derecha" : "error"}</p>
      </div>
    </div>
  );
}
