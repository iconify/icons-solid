import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i86c5acsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5a8.5 8.5 0 0 1 17 0m-17 0h17m-8.5 0l4.5-5m-4.5 5h.01m3.74 9a2.25 2.25 0 0 1 0-4.5a2.75 2.75 0 0 1 5 .5a2 2 0 0 1-.5 4Z");
}
</style><path class="i86c5acsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:air-quality-meter"} {...others} />);
}

export default Component;
