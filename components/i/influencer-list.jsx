import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wst1eex2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 19c0-3.5 2-5 4.5-5s4.5 1.5 4.5 5m3-11.5h7m-7 4.5h7m-7 4.5H19");
}
</style><path class="wst1eex2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:influencer-list"} {...others} />);
}

export default Component;
