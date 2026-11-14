import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yoaxz0-fo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 14L20 2.5M3.5 14h10m-9 0v4m4-4v4m4-4v4m-10 3h19m-6-3q1.5-2.5 3 0q1.5-2.5 3 0");
}
</style><path class="yoaxz0-fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lawn-dethatch"} {...others} />);
}

export default Component;
