import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zeafuqd3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.14 16.04l1.72-8.58Q5.25 5.5 7.25 5.5h9.5q2 0 2.39 1.96l1.72 8.58Q21.25 18 19.25 18H4.75q-2 0-1.61-1.96m4.61-1.54l4-5m-.5 5.75l2.25-2.75");
}
</style><path class="zeafuqd3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:windshield"} {...others} />);
}

export default Component;
