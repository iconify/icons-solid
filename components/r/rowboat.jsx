import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1g66hvip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.5h18.5c-.75 3.25-3 5.75-6 5.75h-6.5c-3 0-5.25-2.5-6-5.75M8 14h8M3.5 8h11m1-1.25H20q1 0 1 1v.5q0 1-1 1h-4.5q-1 0-1-1v-.5q0-1 1-1");
}
</style><path class="j1g66hvip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rowboat"} {...others} />);
}

export default Component;
