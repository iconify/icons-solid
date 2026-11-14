import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d7yfvwcvf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.414 5h7.985a2.625 2.625 0 0 1 2.499 3.428l-2.812 8.75a2.625 2.625 0 0 1-2.5 1.822H6.601a2.625 2.625 0 0 1-2.499-3.428l2.812-8.75A2.625 2.625 0 0 1 9.414 5");
}
</style><path class="d7yfvwcvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:parallelogram"} {...others} />);
}

export default Component;
