import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.glfigwube {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4ZM3 21h15m-2-10.5h1.5a2 2 0 0 1 0 4H16M8.5 3v3m4-3v3");
}
</style><path class="glfigwube"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:staff-break"} {...others} />);
}

export default Component;
