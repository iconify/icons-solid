import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bgcr09bct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5c2.75 2 3.5 4.75 3.5 8v5h-7v-5c0-3.25.75-6 3.5-8M5.5 11l-2 2v2.5h2m7-4.5l2 2v2.172m-.972.328H12.5m-4.5 2l1 2l1-2M3 21h10m1.75-3l2 2L21 15.75");
}
</style><path class="bgcr09bct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:launch-success"} {...others} />);
}

export default Component;
