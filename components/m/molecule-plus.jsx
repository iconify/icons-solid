import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhflb3itf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13 1a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-6.75 4.5L6 7m6.25 4l3.5-3.25M18 15v6m-3-3h6");
}
</style><path class="dhflb3itf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:molecule-plus"} {...others} />);
}

export default Component;
