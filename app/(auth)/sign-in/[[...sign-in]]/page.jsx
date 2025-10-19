import { SignIn } from "@clerk/nextjs";
import { Rocket, CheckCircle2, ClipboardCheck, TrendingUp } from "lucide-react";

/**
 * This is the branded left panel for the auth pages.
 */
const AuthPanel = () => {
  const features = [
    {
      icon: <CheckCircle2 className="w-5 h-5 text-blue-400" />,
      text: "Personalized AI-driven study plans.",
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-blue-400" />,
      text: "Interactive quizzes and mock tests.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      text: "Real-time progress tracking and analytics.",
    },
  ];

  return (
    <div className="hidden h-full flex-col justify-between bg-gradient-to-br from-slate-900 to-blue-950 p-10 text-white md:flex">
      {/* Top: Logo and App Name */}
      <div className="flex items-center gap-3">
        <Rocket className="w-8 h-8" />
        <span className="text-2xl font-bold tracking-tight">PrepPilot</span>
      </div>

      {/* Middle: Value Proposition */}
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold leading-snug">
          Navigate your preparation.
          <br />
          Land your dream goal.
        </h1>
        <p className="text-lg font-light text-slate-300">
          Join thousands of students acing their exams with AI-powered insights
          and personalized study roadmaps.
        </p>
        <div className="mt-4 space-y-5">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex-shrink-0 rounded-full bg-slate-800 p-2">
                {feature.icon}
              </div>
              <span className="text-base text-slate-200">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Footer */}
      <footer className="text-sm text-slate-400">
        © {new Date().getFullYear()} PrepPilot. All rights reserved.
      </footer>
    </div>
  );
};

/**
 * This is the main sign-in page.
 */
export default function SignInPage() {
  return (
    <main className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Panel */}
      <AuthPanel />

      {/* Right Panel: Sign In Form */}
      <div className="flex items-center justify-center bg-white p-8">
        <SignIn />
      </div>
    </main>
  );
}