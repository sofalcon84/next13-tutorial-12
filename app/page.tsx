type QuoteProps = {
  text: string
  author: string
}
export default function Home() {
  const DATA= [
    {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
    },
    {
    "text": "You can observe a lot just by watching.",
    "author": "Yogi Berra"
    },
    {
    "text": "A house divided against itself cannot stand.",
    "author": "Abraham Lincoln"
    },
    {
    "text": "Difficulties increase the nearer we get to the goal.",
    "author": "Johann Wolfgang von Goethe"
    },
    {
    "text": "Fate is in your hands and no one elses",
    "author": "Byron Pulsifer"
    },
    {
    "text": "Be the chief but never the lord.",
    "author": "Lao Tzu"
    },
    {
    "text": "Nothing happens unless first we dream.",
    "author": "Carl Sandburg"
    },
    {
    "text": "Well begun is half done.",
    "author": "Aristotle"
    },
    {
    "text": "Life is a learning experience, only if you learn.",
    "author": "Yogi Berra"
    },
    {
    "text": "Self-complacency is fatal to progress.",
    "author": "Margaret Sangster"
    },
    {
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha"
    },
    {
    "text": "What you give is what you get.",
    "author": "Byron Pulsifer"
    },
    {
    "text": "We can only learn to love by loving.",
    "author": "Iris Murdoch"
    },
    {
    "text": "Life is change. Growth is optional. Choose wisely.",
    "author": "Karen Clark"
    },
    {
    "text": "You'll see it when you believe it.",
    "author": "Wayne Dyer"
    }]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-slate-700 rounded-lg px-8 py-4'>
        <h1 className='text-6xl text-white'>
          Quote Generator 
        </h1>  
      </div>   
      <div className="grid ">
       {DATA.map((qoute: QuoteProps, idx) => {
        return(
          <div key={idx} className="bg-orange-300 px-8 py-4 my-4 rounded-lg flex flex-col">
            <div className="bg-pink-400 px-8 py-6 rounded-md mt-4">
            <h2>{qoute.text}</h2>
            </div>
            <div className="bg-cyan-600 justify-center mx-auto py-4 w-96 items-center flex flex-col mt-2">
              <h3 className="text-center">{qoute.author}</h3>
            </div>
          </div>
        )
       })} 
      </div>   
    </main>
  )
}
