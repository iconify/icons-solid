import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.utr7lgb8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0m1 3.5l-2 6l3 3V21m-3-7.5l-2 4l-2.5 3m2.75-13za1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 8.75 13A1.75 1.75 0 0 1 7 11.25v-2A1.75 1.75 0 0 1 8.75 7.5m3.25 2l4.5 1.5m.75-2.5l1.5 12.5");
}
</style><path class="utr7lgb8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hiking"} {...others} />);
}

export default Component;
