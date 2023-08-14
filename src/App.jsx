import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    

    return (
        <section className='App'>

            <TwitterFollowCard  userName="kikobeats">
                Kiko Beats
            </TwitterFollowCard>

            <TwitterFollowCard  userName="markzuckerberg">
                Mark Zuckerberg
            </TwitterFollowCard>

            <TwitterFollowCard  userName="twitter">
                Twitter
            </TwitterFollowCard>

        </section>
    )
}