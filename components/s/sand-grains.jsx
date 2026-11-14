import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gskh-cc0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 6.5a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m-3.5 6a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m7 0a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m-10.5 6a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m7 0a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0m7 0a2.25 1.75 0 1 0 4.5 0a2.25 1.75 0 1 0-4.5 0");
}
</style><path class="gskh-cc0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sand-grains"} {...others} />);
}

export default Component;
