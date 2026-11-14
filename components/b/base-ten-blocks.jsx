import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.urcinexur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9.5zA1.5 1.5 0 0 1 6 11v8a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 3 19v-8a1.5 1.5 0 0 1 1.5-1.5m6-6.5h9A1.5 1.5 0 0 1 21 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 9 13.5v-9A1.5 1.5 0 0 1 10.5 3M9 7h12M9 11h12m-8-8v12m4-12v12");
}
</style><path class="urcinexur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:base-ten-blocks"} {...others} />);
}

export default Component;
