import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r00wysb7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5zA1.75 1.75 0 0 1 7 4.25v3.5A1.75 1.75 0 0 1 5.25 9.5A1.75 1.75 0 0 1 3.5 7.75v-3.5A1.75 1.75 0 0 1 5.25 2.5m13.5 0za1.75 1.75 0 0 1 1.75 1.75v3.5a1.75 1.75 0 0 1-1.75 1.75A1.75 1.75 0 0 1 17 7.75v-3.5a1.75 1.75 0 0 1 1.75-1.75M7 6h10m-8 6.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0M5.5 21.5c0-2.25 2.5-3 6.5-3s6.5.75 6.5 3");
}
</style><path class="r00wysb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:overhead-hold"} {...others} />);
}

export default Component;
