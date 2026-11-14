import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ywy_b9iff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.272 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.966 0 1.881.116 2.717.334M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8.5 9.5q1.625-1.5 3.25 0t3.25 0M15 20q1.625-1.5 3.25 0t3.25 0");
}
</style><path class="ywy_b9iff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:marine-biologist"} {...others} />);
}

export default Component;
