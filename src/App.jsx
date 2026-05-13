import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Box() {
  return <div className='square'></div>;
}

function Row() {
  return (
    <div style={{display : "flex", gap : 10}}>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  )
}

function Board() {
  return (
    <div style={{display : "flex", flexDirection: 'column', gap : 10}}>
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
    </div>
  )
}

function App() {
  const [guess, setGuess] = useState("");

  return (
    <>
    {/* HEADER FOR GAME */}
      <h1 style={{justifyContent: 'center', alignItems: 'center'}}>
        WORDLE
      </h1>
    {/* MAIN GAME BOARD */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Board />
      </div>
    {/* INPUT TEXT AREA */}
      <input type="text" value={guess} onChange={(e) => setGuess(e.target.value)}></input>
    </>
  )
}

export default App
