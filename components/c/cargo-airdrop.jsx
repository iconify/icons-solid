import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fssfvn_7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11c0-4.5 3-7.5 7-7.5s7 3 7 7.5Zm6 5h2a1.5 1.5 0 0 1 1.5 1.5v2A1.5 1.5 0 0 1 13 21h-2a1.5 1.5 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 11 16m-5.5-5l4 5m9-5l-4 5");
}
</style><path class="fssfvn_7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cargo-airdrop"} {...others} />);
}

export default Component;
