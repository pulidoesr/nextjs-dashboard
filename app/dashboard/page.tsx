// app/dashboard/page.tsx
import { redirect } from 'next/navigation';

export default function DashboardIndex() {
  redirect('/dashboard/overview'); // or render real content here
}
