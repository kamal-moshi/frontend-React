import React, { useState } from 'react'

const Home = () => {
const [currentQuestion,setCurrentQuestion]= useState(-1)
const [score,setScore]= useState(0)
const [quizstart,setQuizStart]= useState(false)
const [showresult,setshowresult]= useState(false)
    const questions = [
        {
          question: "What is the capital of France?",
          answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Madrid", correct: false },
            { text: "Berlin", correct: false },
          ],
        },
        {
            question: "What is the capital of India?",
            answers: [
              { text: "Paris", correct: false },
              { text: "London", correct: false },
              { text: "Dehli", correct: true },
              { text: "Berlin", correct: false },
            ],
          },
          {
            question: "What is the capital of England?",
            answers: [
              { text: "Paris", correct: false },
              { text: "London", correct: true },
              { text: "Madrid", correct: false },
              { text: "Berlin", correct: false },
            ],
          },
          {
            question: "What is the capital of USA?",
            answers: [
              { text: "Paris", correct: false },
              { text: "London", correct: false },
              { text: "New York", correct: true },
              { text: "Berlin", correct: false },
            ],
          },
          {
            question: "What is the capital of Germany?",
            answers: [
              { text: "Paris", correct: false },
              { text: "London", correct: false },
              { text: "Madrid", correct: false },
              { text: "Berlin", correct: true },
            ],
          },
        

       
      ];

const startQuiz=()=>{
    try {
        setCurrentQuestion(0);
        setScore(0)
        setQuizStart(true)
        setshowresult(false)
        
    } catch (err) {
        alert(err.message)
    }
}

const handleAnswerClick = (correct) =>{
    try {
        console.log("correct")
        if(correct){
            setScore(score+1)
  alert("correct answer")
        }
else if(!correct){
    alert("wrong answer")
}
const nextquestion=currentQuestion+1;
if(nextquestion<questions.length){
     setCurrentQuestion(currentQuestion+1);
}else{
    setshowresult(true)
}


    } catch (err) {
        alert(err.message)
    }
}
  return (
    <>
    <div >
 {
    currentQuestion===-1 && (
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>startQuiz()}>Start Quiz</button>
    ) }
    {
        showresult?(
            <div>

<h3>Quiz Result</h3>
<h5>Your Score:{score} out of {questions.length}</h5>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>startQuiz()}>Restart Quiz</button>


            </div>
        ):currentQuestion>=0 && (
            <div>
  <h3>Question {currentQuestion+1}</h3>
  <h5>{questions[currentQuestion].question}</h5>
  
  <div className='mt-5'>
{
    questions[currentQuestion].answers.map((option,index)=>{
        return(
   
            <p> <span><input className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-100 mt-2' type="button" onClick={()=>handleAnswerClick(option.correct)} value={option.text} /></span>  <b>{option.correct}</b></p>
            
        )
    
    })
}

  </div>


            </div>
        )
    }
    


    </div>

    
    </>
  )
}

export default Home