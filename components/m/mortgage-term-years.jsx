import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oxsce5b2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m14.406 10.567l2.25-2.4a1.5 1.5 0 0 1 2.188 0l2.25 2.4a1.5 1.5 0 0 1 .406 1.026V17a1.5 1.5 0 0 1-1.5 1.5h-4.5A1.5 1.5 0 0 1 14 17v-5.407a1.5 1.5 0 0 1 .406-1.026M2.5 14.75H12m-1.5-1.5l1.5 1.5l-1.5 1.5M2.75 13.5V16m2.75-2.5V16m2.75-2.5V16");
}
</style><path class="oxsce5b2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mortgage-term-years"} {...others} />);
}

export default Component;
