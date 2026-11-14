import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nhx3q7bsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 8h8.5A1.75 1.75 0 0 1 21 9.75v.5A1.75 1.75 0 0 1 19.25 12h-8.5A1.75 1.75 0 0 1 9 10.25v-.5A1.75 1.75 0 0 1 10.75 8m-7 .75h4A1.25 1.25 0 0 1 9 10a1.25 1.25 0 0 1-1.25 1.25h-4A1.25 1.25 0 0 1 2.5 10a1.25 1.25 0 0 1 1.25-1.25M10.5 12v4m3-4v4m3-4v4m3-4v4");
}
</style><path class="nhx3q7bsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wire-brush"} {...others} />);
}

export default Component;
