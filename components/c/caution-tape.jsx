import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y686we3dc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.7 11.69l16.6-5.38q.95-.31.95.69v5q0 1-.95 1.31L3.7 18.69q-.95.31-.95-.69v-5q0-1 .95-1.31m1.55 5.5l2.25-5.73m1.75 4.43l2.25-5.73m1.75 4.43l2.25-5.73m1.75 4.44l2.25-5.73");
}
</style><path class="y686we3dc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:caution-tape"} {...others} />);
}

export default Component;
