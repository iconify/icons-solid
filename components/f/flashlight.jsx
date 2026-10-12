import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lwp-fdbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9.25h4.5q1 0 1.74-.67l1.27-1.16Q12 6.75 13 6.75h2q1 0 1 1v8.5q0 1-1 1h-2q-1 0-1.74-.67l-1.27-1.16q-.74-.67-1.74-.67h-4.5q-1 0-1-1v-3.5q0-1 1-1M5.25 12h2.5M18 8.25l3.25-1.5m-3 5.25h3M18 15.75l3.25 1.5");
}
</style><path class="lwp-fdbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:flashlight"} {...others} />);
}

export default Component;
