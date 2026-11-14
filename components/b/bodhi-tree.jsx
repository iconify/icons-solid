import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y31v84pyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13.5c-3 0-3-5 0-5C5 4 10 2 12.5 4c2.5-2 8-.5 7 4.5c3 .5 2.5 5-.5 5Zm5.5 0v4l-3 3m6-7v4l3 3");
}
</style><path class="y31v84pyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:bodhi-tree"} {...others} />);
}

export default Component;
