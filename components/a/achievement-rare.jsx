import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gjb9c0bzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.734 5.5h6.532a1.5 1.5 0 0 1 1.184.579l2.363 3.038a1.5 1.5 0 0 1 .037 1.793l-5.629 7.881a1.5 1.5 0 0 1-2.442 0L3.15 10.91a1.5 1.5 0 0 1 .037-1.793L5.55 6.079A1.5 1.5 0 0 1 6.734 5.5M2.5 10h15m1.75-7.5q0 2.25 2.25 2.25q-2.25 0-2.25 2.25q0-2.25-2.25-2.25q2.25 0 2.25-2.25");
}
</style><path class="gjb9c0bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:achievement-rare"} {...others} />);
}

export default Component;
