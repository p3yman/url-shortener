import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import logo from "~/assets/logo.svg";

export const Header = component$(() => {
  return (
    <header class="border-b border-slate-100">
      <div class="container flex justify-between items-center py-4">
        <a href="/" class="text-2xl font-bold">
          <Image src={logo} alt="LinkBite" width="200" height="50" />
          LinkBite
        </a>
        <nav class="flex gap-4">
          <a href="/links">Links</a>
          <a href="/analytics">Analytics</a>
        </nav>
        <div>
          <a href="/login">Login</a>
        </div>
      </div>
    </header>
  );
});
