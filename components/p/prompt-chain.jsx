import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ztw360_ou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 8.5h1A1.75 1.75 0 0 1 7 10.25v3.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 4.25 8.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-3.5A1.75 1.75 0 0 1 11.5 8.5m7.25 0h1a1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 13.75v-3.5a1.75 1.75 0 0 1 1.75-1.75M7 12h2.75m4.5 0H17");
}
</style><path class="ztw360_ou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:prompt-chain"} {...others} />);
}

export default Component;
