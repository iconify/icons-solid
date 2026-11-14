import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3v2fobus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12a3 4 0 1 0 6 0a3 4 0 1 0-6 0m1 8.25a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0m8-13.75a3 4 0 1 0 6 0a3 4 0 1 0-6 0m1 8.25a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0");
}
</style><path class="f3v2fobus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:footsteps"} {...others} />);
}

export default Component;
