import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t07g5ub3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.66 8.58l5.18-2.41q.91-.42.91.58v10.5q0 1-.91.58l-5.18-2.41Q2.75 15 2.75 14v-4q0-1 .91-1.42m9.09-.08h2.5m3.5 0h2.5m-8.5 3.5h8.5m-8.5 3.5h2.5m3.5 0h2.5");
}
</style><path class="t07g5ub3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:thruster"} {...others} />);
}

export default Component;
