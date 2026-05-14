export default function Home() {
  return (
    <main className="min-h-screen bg-[#2f3b2f] text-white">

      {/* Hero */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6">
          <p className="tracking-[0.3em] text-sm mb-4">
            GLAMPING RESORT
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Forest Retreat
          </h1>

          <p className="max-w-xl mx-auto text-white/80 leading-8 mb-8">
            森林と自然に囲まれた、
            静かな時間を楽しむグランピング体験。
          </p>

          <button className="border border-white px-8 py-4 hover:bg-white hover:text-black transition">
            RESERVE
          </button>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop"
            alt="forest"
            className="rounded-3xl h-[500px] object-cover"
          />

          <div>
            <p className="text-sm tracking-[0.2em] text-white/50 mb-4">
              ABOUT
            </p>

            <h2 className="text-4xl font-bold mb-8 leading-tight">
              森に包まれる、
              <br />
              特別な滞在。
            </h2>

            <p className="text-white/70 leading-8 mb-6">
              木々の音、風の香り、柔らかな灯り。
              日常から少し離れた空間で、
              心と身体をゆっくり整える時間を。
            </p>

            <button className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition">
              VIEW MORE
            </button>
          </div>

        </div>
      </section>

    </main>
  )
}