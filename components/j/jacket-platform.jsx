import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w1nfz3bsj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h14A1.5 1.5 0 0 1 20.5 5A1.5 1.5 0 0 1 19 6.5H5A1.5 1.5 0 0 1 3.5 5A1.5 1.5 0 0 1 5 3.5m2 3l-2 10m12-10l2 10M7 6.5l12 10m-2-10l-12 10M2.5 20q2.5-1.5 5 0t5 0t5 0t4 0");
}
</style><path class="w1nfz3bsj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:jacket-platform"} {...others} />);
}

export default Component;
