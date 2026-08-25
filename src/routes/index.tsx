import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import nodesImage from "@/assets/automation-nodes.jpg";
import avatarDara from "@/assets/avatar-dara.jpg";
import avatarIlan from "@/assets/avatar-ilan.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NextFlow AI — AI Automation Agency for Operations Teams" },
      {
        name: "description",
        content:
          "NextFlow AI builds AI agent pipelines that route, hand off, and close your team's busywork automatically. Automation designed, shipped, and maintained by senior engineers.",
      },
      { property: "og:title", content: "NextFlow AI — AI Automation Agency" },
      {
        property: "og:description",
        content:
          "AI agent pipelines that run your back office quietly in the background. Built, shipped, and maintained by senior automation engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    glyph: "⚙",
    tone: "brand" as const,
    title: "Intake & Triage",
    body: "Inbound requests are read, classified, and sorted to the right queue before a person touches them.",
  },
  {
    glyph: "⇄",
    tone: "accent" as const,
    title: "Agent Handoffs",
    body: "Specialist agents pass work between stages with context intact, no dropped threads.",
  },
  {
    glyph: "⟳",
    tone: "brand" as const,
    title: "Recurring Ops",
    body: "Billing, reporting, and follow-ups run on schedule and adapt to what they learn.",
  },
  {
    glyph: "⌗",
    tone: "accent" as const,
    title: "Document Intelligence",
    body: "Contracts and invoices are extracted, validated, and filed into the right record.",
  },
  {
    glyph: "✳",
    tone: "brand" as const,
    title: "Signal Monitoring",
    body: "We watch your channels and escalate only when something genuinely needs a human.",
  },
  {
    glyph: "◈",
    tone: "accent" as const,
    title: "Audit & Memory",
    body: "Every action is logged with a full trail, so the system stays explainable and safe.",
  },
];

const pipeline = [
  {
    stage: "Intake",
    title: "Inbound ticket parsed",
    detail: "Email → structured task",
    dot: "bg-brand",
    delay: "0s",
  },
  {
    stage: "Reason",
    title: "Model routes intent",
    detail: "Classified, priority set",
    dot: "bg-brand",
    delay: "0.6s",
  },
  {
    stage: "Action",
    title: "Crew updated",
    detail: "3 tools fired in sequence",
    dot: "bg-accent",
    delay: "1.2s",
  },
  {
    stage: "Verify",
    title: "Closed & logged",
    detail: "Audit trail attached",
    dot: "bg-brand-deep",
    delay: "1.8s",
  },
];

const testimonials = [
  {
    quote:
      "We stopped staffing the inbox. Inbound just lands where it belongs, sorted, three times a day.",
    name: "Dara Okafor",
    role: "Head of Ops, Meridian",
    avatar: avatarDara,
  },
  {
    quote:
      "The handoffs are the detail. Context survives every stage, which is exactly what the rest of our stack lacked.",
    name: "Ilan Rhee",
    role: "Founder, Copperline",
    avatar: avatarIlan,
  },
  {
    quote:
      "Quiet and reliable. I stopped checking whether it ran. That's the whole point, and they delivered it.",
    name: "Priya Menon",
    role: "Finance Director, Halcyon",
    avatar: avatarPriya,
  },
];

const faqs = [
  {
    q: "How long does a build take?",
    a: "Most single workflows go live in two to three weeks. Larger multi-agent systems run six to eight, with a working demo in the first week.",
  },
  {
    q: "Do we keep control of the pipeline?",
    a: "Yes. Every stage is logged and every rule is editable. You can pause any node, override a decision, or route it back to a human at will.",
  },
  {
    q: 'What does "quiet in the background" mean?',
    a: "The system surfaces exceptions, not noise. It handles the routine and only pings you when a decision genuinely needs your judgment.",
  },
  {
    q: "Which tools does it connect to?",
    a: "Your existing stack — CRMs, helpdesks, spreadsheets, billing, and internal APIs. We build the connectors rather than force a migration.",
  },
];

const inputClass =
  "mt-1.5 w-full rounded-lg border-0 bg-card px-3 py-2.5 text-sm text-ink ring-1 ring-ink/10 outline-none placeholder:text-ink/30 focus:ring-2 focus:ring-brand/50";

function Index() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-paper font-body text-ink antialiased">
      <header className="sticky top-0 z-40 border-b border-ink/5 bg-paper/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-ink font-display text-sm font-semibold text-brand">
              N
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">NextFlow AI</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-ink/60 md:flex">
            <a href="#services" className="transition-colors hover:text-ink">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-ink">
              About
            </a>
            <a href="#pricing" className="transition-colors hover:text-ink">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-ink">
              FAQ
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper ring-1 ring-ink transition-transform hover:-translate-y-0.5"
          >
            <span className="text-accent">→</span> Start a build
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="ambient pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand/25 via-brand-deep/15 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-6xl px-5 pt-24 pb-16">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand-deep ring-1 ring-brand/20">
                <span className="flow-dot size-1.5 rounded-full bg-brand" /> Autonomous workflow
                platform
              </span>
              <h1 className="mt-6 max-w-[20ch] text-balance font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Your work moves through the pipeline on its own.
              </h1>
              <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-pretty text-ink/60">
                NextFlow wires AI agents into your ops so tasks route, hand off, and close without a
                hand on the wheel. Built for teams who want the engine quiet in the background.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand transition-transform hover:-translate-y-0.5"
                >
                  See it move <span aria-hidden>→</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium text-ink/70 ring-1 ring-ink/10 transition-colors hover:bg-ink/5"
                >
                  Explore the stack
                </a>
              </div>
            </div>

            <div className="reveal mt-16 rounded-3xl bg-card p-5 shadow-panel ring-1 ring-black/5 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-medium text-ink/50">
                  <span className="flex gap-1.5">
                    <span className="size-2 rounded-full bg-ink/20" />
                    <span className="size-2 rounded-full bg-ink/20" />
                    <span className="size-2 rounded-full bg-ink/20" />
                  </span>
                  Live orchestration
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-medium text-brand-deep">
                  <span className="flow-dot size-1.5 rounded-full bg-brand" /> 4 nodes active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {pipeline.map((node) => (
                  <div key={node.stage} className="rounded-xl bg-brand/8 p-4 ring-1 ring-brand/20">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] tracking-wider text-ink/40 uppercase">
                        {node.stage}
                      </span>
                      <span
                        className={`flow-dot size-2 rounded-full ${node.dot}`}
                        style={{ animationDelay: node.delay }}
                      />
                    </div>
                    <p className="mt-3 font-display text-sm font-medium">{node.title}</p>
                    <p className="mt-1 text-xs text-ink/50">{node.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-[48ch]">
            <p className="text-sm font-medium text-brand-deep">Automation offerings</p>
            <h2 className="mt-3 max-w-[40ch] text-balance font-display text-3xl leading-tight font-semibold tracking-tight">
              Six ways we put your back office on autopilot.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-lift rounded-2xl bg-card p-6 shadow-card ring-1 ring-black/5 hover:-translate-y-1"
              >
                <span
                  className={`grid size-10 place-items-center rounded-xl text-lg ${
                    service.tone === "brand"
                      ? "bg-brand/10 text-brand-deep"
                      : "bg-accent/10 text-accent"
                  }`}
                  aria-hidden
                >
                  {service.glyph}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{service.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="border-y border-ink/5 bg-card">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-brand-deep">About the agency</p>
              <h2 className="mt-3 max-w-[40ch] text-balance font-display text-3xl leading-tight font-semibold tracking-tight">
                Engineered like a product, run like a partner.
              </h2>
              <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-pretty text-ink/65">
                We are a small senior team of automation engineers and ops designers. We build the
                pipeline, hand over the keys, and stay on call while it runs. No black boxes, no
                hand-waving — just systems that quietly do the work.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["240+", "pipelines shipped"],
                  ["38h", "saved per seat / mo"],
                  ["99.98%", "uptime tracked"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-semibold tracking-tight">{value}</p>
                    <p className="mt-1 text-xs text-ink/50">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-brand/10 to-brand-deep/5 p-2 ring-1 ring-black/5">
              <img
                src={nodesImage}
                alt="Abstract dashboard showing connected automation nodes"
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-[48ch]">
            <p className="text-sm font-medium text-brand-deep">What teams say</p>
            <h2 className="mt-3 max-w-[40ch] text-balance font-display text-3xl leading-tight font-semibold tracking-tight">
              The engine hums, the work clears.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="card-lift rounded-2xl bg-card p-6 shadow-card ring-1 ring-black/5 hover:-translate-y-1"
              >
                <blockquote className="text-sm leading-relaxed text-ink/75">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="size-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-ink/50">{item.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="pricing" className="border-y border-ink/5 bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="max-w-[48ch]">
              <p className="text-sm font-medium text-brand-deep">Pricing</p>
              <h2 className="mt-3 max-w-[40ch] text-balance font-display text-3xl leading-tight font-semibold tracking-tight">
                Three ways to put it on rails.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3 lg:items-stretch">
              <div className="card-lift flex flex-col rounded-2xl bg-paper p-7 ring-1 ring-black/5 hover:-translate-y-1">
                <h3 className="font-display text-lg font-semibold">Starter</h3>
                <p className="mt-1 text-sm text-ink/55">For a single pipeline.</p>
                <p className="mt-6 font-display text-4xl font-semibold tracking-tight">
                  $480<span className="text-base font-medium text-ink/40">/mo</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-ink/70">
                  {["1 automated workflow", "500 actions / month", "Email support"].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-ink/15 transition-colors hover:bg-ink/5"
                >
                  Choose Starter
                </a>
              </div>

              <div className="card-lift relative flex flex-col rounded-2xl bg-ink p-7 text-paper shadow-feature ring-1 ring-ink hover:-translate-y-1">
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-ink">
                  Most chosen
                </span>
                <h3 className="font-display text-lg font-semibold">Growth</h3>
                <p className="mt-1 text-sm text-paper/55">For a full ops team.</p>
                <p className="mt-6 font-display text-4xl font-semibold tracking-tight">
                  $1,280<span className="text-base font-medium text-paper/40">/mo</span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-paper/80">
                  {[
                    "6 workflows, 6 agents",
                    "10,000 actions / month",
                    "Audit log & memory",
                    "Priority human support",
                  ].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2.5 text-sm font-medium text-primary-foreground ring-1 ring-brand transition-transform hover:-translate-y-0.5"
                >
                  Choose Growth
                </a>
              </div>

              <div className="card-lift flex flex-col rounded-2xl bg-paper p-7 ring-1 ring-black/5 hover:-translate-y-1">
                <h3 className="font-display text-lg font-semibold">Scale</h3>
                <p className="mt-1 text-sm text-ink/55">For distributed orgs.</p>
                <p className="mt-6 font-display text-4xl font-semibold tracking-tight">Custom</p>
                <ul className="mt-6 space-y-3 text-sm text-ink/70">
                  {["Unlimited workflows", "SSO & private models", "Dedicated engineer"].map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-brand">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-ink/15 transition-colors hover:bg-ink/5"
                >
                  Talk to us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
          <div className="max-w-[48ch]">
            <p className="text-sm font-medium text-brand-deep">FAQ</p>
            <h2 className="mt-3 text-balance font-display text-3xl leading-tight font-semibold tracking-tight">
              Questions, answered plainly.
            </h2>
          </div>
          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((faq, index) => (
              <details key={faq.q} className="group py-5" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium">
                  {faq.q}
                  <span className="text-ink/40 transition-transform group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="border-t border-ink/5 bg-card">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-brand-deep">Contact</p>
                <h2 className="mt-3 max-w-[38ch] text-balance font-display text-3xl leading-tight font-semibold tracking-tight">
                  Tell us what&rsquo;s eating your week.
                </h2>
                <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-pretty text-ink/60">
                  We&rsquo;ll map the heaviest manual loop and show you the pipeline it becomes. No
                  slideware, just a working plan.
                </p>
                <div className="mt-8 space-y-3 text-sm text-ink/70">
                  <p className="flex items-center gap-2">
                    <span className="text-brand">◆</span> hello@nextflow.ai
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-brand">◆</span> Replies within one business day
                  </p>
                </div>
              </div>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-paper p-6 shadow-panel ring-1 ring-black/5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-medium text-ink/60">Name</span>
                    <input required type="text" placeholder="Jordan Blake" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink/60">Email</span>
                    <input
                      required
                      type="email"
                      placeholder="jordan@company.com"
                      className={inputClass}
                    />
                  </label>
                </div>
                <label className="mt-4 block">
                  <span className="text-xs font-medium text-ink/60">Company</span>
                  <input type="text" placeholder="Company name" className={inputClass} />
                </label>
                <label className="mt-4 block">
                  <span className="text-xs font-medium text-ink/60">Message</span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Which process could run itself?"
                    className={`${inputClass} resize-none`}
                  />
                </label>
                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-medium text-primary-foreground ring-1 ring-brand transition-transform hover:-translate-y-0.5"
                >
                  {sent ? "Brief received" : "Send the brief"} <span aria-hidden>→</span>
                </button>
                {sent && (
                  <p className="mt-3 text-center text-xs text-brand-deep">
                    Thanks — we&rsquo;ll reply within one business day.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink text-paper/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-brand/20 font-display text-sm font-semibold text-brand">
              N
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-paper">
              NextFlow AI
            </span>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
            <a href="#services" className="transition-colors hover:text-paper">
              Services
            </a>
            <a href="#pricing" className="transition-colors hover:text-paper">
              Pricing
            </a>
            <a href="#faq" className="transition-colors hover:text-paper">
              FAQ
            </a>
            <a href="#contact" className="transition-colors hover:text-paper">
              Contact
            </a>
          </nav>
          <p className="text-xs text-paper/40">© 2026 NextFlow AI. Built to run quietly.</p>
        </div>
      </footer>
    </div>
  );
}
