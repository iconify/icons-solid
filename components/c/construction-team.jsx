import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r170xb3bx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h8m-7 0a3 3 0 0 1 6 0m-5.25 0v1a2.25 2.25 0 0 0 4.5 0v-1m-6.25 13c0-4 1.75-6.5 4-6.5s4 2.5 4 6.5m2.75-13h8m-7 0a3 3 0 0 1 6 0M15 7.5v1a2.25 2.25 0 0 0 4.5 0v-1m-6.25 13c0-4 1.75-6.5 4-6.5s4 2.5 4 6.5");
}
</style><path class="r170xb3bx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:construction-team"} {...others} />);
}

export default Component;
