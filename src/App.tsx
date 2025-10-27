import {
  Anchor,
  CalendarCheck,
  Compass,
  LifeBuoy,
  LocateFixed,
  Waves,
} from 'lucide-react';

const features = [
  {
    title: 'Nationwide Coverage',
    description:
      'Discover marina slips, dry docks, and private moorings in coastal cities and lakeside towns across the country.',
    icon: Compass,
  },
  {
    title: 'Flexible Booking',
    description:
      'Reserve hourly, daily, or monthly stays with transparent pricing and instant confirmations.',
    icon: CalendarCheck,
  },
  {
    title: 'Verified Hosts',
    description:
      'Every BoatPark listing is vetted for security, amenities, and compliance with local regulations.',
    icon: LifeBuoy,
  },
];

const benefits = [
  {
    title: 'Security First',
    description:
      'From gated marina access to 24/7 surveillance, our hosts provide peace of mind for every vessel size.',
    icon: Anchor,
  },
  {
    title: 'Smart Matching',
    description:
      'Tell us your boat length, draft, and power requirements and we\'ll surface the best-fit berths instantly.',
    icon: LocateFixed,
  },
  {
    title: 'Weather-Savvy Planning',
    description:
      'Live marine forecasts, tide charts, and dockmaster updates keep your itinerary on course.',
    icon: Waves,
  },
];

const testimonials = [
  {
    name: 'Captain Elise Rivera',
    title: 'Weekend Cruiser, Miami',
    quote:
      '“BoatPark makes spontaneous getaways easy. I can book a slip on Friday afternoon and dock within hours.”',
  },
  {
    name: 'Marcus Bennett',
    title: 'Charter Operator, Seattle',
    quote:
      '“The verified host profiles and insurance details let me manage my fleet with confidence all season long.”',
  },
  {
    name: 'Priya Desai',
    title: 'Liveaboard Sailor, San Diego',
    quote:
      '“I love the transparent pricing and amenities list. Shore power, Wi-Fi, and secure storage are all clearly labeled.”',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Anchor className="h-6 w-6 text-cyan-400" />
            BoatPark
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#benefits">
              Why BoatPark
            </a>
            <a className="transition hover:text-white" href="#testimonials">
              Stories
            </a>
          </nav>
          <button className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Launch App
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/5 py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_60%)]" />
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/60 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Boat Parking, Simplified
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Find secure berths, marina slips, and dry storage tailored to your vessel.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                BoatPark connects captains with verified hosts in minutes. Compare amenities, review dock
                requirements, and reserve the perfect spot before you cast off.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Start Exploring
                </button>
                <button className="rounded-full border border-slate-500/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300/80">
                  List Your Dock
                </button>
              </div>
              <dl className="grid gap-6 text-sm text-slate-300 sm:grid-cols-3">
                <div>
                  <dt className="font-semibold text-white">1,200+ safe moorings</dt>
                  <dd>Screened and insured coastal & inland hosts</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">4.9★ average rating</dt>
                  <dd>Trusted by powerboats and sailing crews alike</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Live availability</dt>
                  <dd>Real-time berth confirmations and waitlists</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-cyan-500/10">
              <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Featured Marina</span>
                  <span>Fort Lauderdale, FL</span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-slate-900/70 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-200">
                      <span className="font-semibold">Slip A23</span>
                      <span>45ft max</span>
                    </div>
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                      <CalendarCheck className="h-4 w-4 text-cyan-300" />
                      <span>Available this weekend</span>
                    </div>
                  </div>
                  <div className="grid gap-3 rounded-xl bg-slate-900/70 p-4 text-xs text-slate-300">
                    <div className="flex items-center justify-between">
                      <span>Shore Power</span>
                      <span className="text-white">50A</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Depth at Low Tide</span>
                      <span className="text-white">12 ft</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Amenities</span>
                      <span className="text-white">Wi-Fi · Fuel Dock · Pump-Out</span>
                    </div>
                  </div>
                  <button className="w-full rounded-full bg-cyan-500 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                    Reserve Slip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-b border-white/5 bg-slate-950/40 py-20">
          <div className="mx-auto max-w-6xl space-y-12 px-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white">Plan every journey with confidence</h2>
              <p className="mt-4 text-lg text-slate-300">
                BoatPark combines live availability, transparent pricing, and trusted hosts to make docking a delight.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-cyan-400/50 hover:bg-slate-900/80"
                >
                  <feature.icon className="h-10 w-10 text-cyan-300 transition group-hover:text-cyan-200" />
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="border-b border-white/5 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold tracking-tight text-white">
                  All the tools you need for smooth sailing
                </h2>
                <p className="text-lg text-slate-300">
                  Whether you\'re planning a coastal hop or staging a long-term stay, BoatPark keeps your voyage
                  organized with intelligent recommendations and safety-first partners.
                </p>
                <div className="space-y-5">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                      <benefit.icon className="mt-1 h-9 w-9 text-cyan-300" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                        <p className="text-sm text-slate-300">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-slate-900/80 to-slate-900/30 p-8 shadow-lg shadow-cyan-500/10">
                <h3 className="text-xl font-semibold text-white">Host with confidence</h3>
                <p className="mt-4 text-sm text-slate-300">
                  List your marina or private dock in minutes. Manage booking rules, verify guests, and sync calendars
                  with existing tools.
                </p>
                <ul className="mt-6 space-y-4 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">1</span>
                    Create your host profile and upload dock details.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">2</span>
                    Set availability, pricing, and insurance coverage.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">3</span>
                    Welcome verified captains with built-in communication tools.
                  </li>
                </ul>
                <button className="mt-8 w-full rounded-full border border-cyan-400/40 bg-slate-950/60 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70">
                  Become a Host
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="border-b border-white/5 bg-slate-950/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-white">Captains who charted their stay</h2>
              <p className="mt-4 text-lg text-slate-300">
                Hear how mariners across the coasts rely on BoatPark for stress-free docking.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 text-left transition hover:border-cyan-400/40 hover:bg-slate-900/80"
                >
                  <blockquote className="text-sm text-slate-200">{testimonial.quote}</blockquote>
                  <figcaption className="mt-6 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                    <div>{testimonial.name}</div>
                    <div className="mt-1 text-[0.7rem] text-slate-400">{testimonial.title}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-lg font-semibold text-white">
            <Anchor className="h-5 w-5 text-cyan-400" /> BoatPark
          </div>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} BoatPark. Navigate farther with trusted docks and secure storage.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
