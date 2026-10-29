import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/y5n0b1bfi.css';
import '../../css/l/l9igifbil.css';
import '../../css/g/gh-sen5bf.css';
import '../../css/f/f0l-zcc9g.css';
import '../../css/i/ivjvpswsx.css';
import '../../css/a/arapij9uw.css';
import '../../css/q/q_60xpb8f.css';
import '../../css/h/ht-3ujb1o.css';
import '../../css/r/r186s1bzo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wm-shadow y5n0b1bfi"/><path class="l9igifbil"/><path class="gh-sen5bf"/><path class="f0l-zcc9g"/><path class="ivjvpswsx"/><path class="arapij9uw"/><path class="q_60xpb8f"/><path class="ht-3ujb1o wm-shine"/><path class="r186s1bzo wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:headphones"} {...others} />);
}

export default Component;
