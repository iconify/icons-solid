import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.awj7sfdeb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m2 3.25L9 13.5m4.5-4.25L15 13.5m-9 0h12a2 2 0 0 1 2 2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-.5 7h13");
}
</style><path class="awj7sfdeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:clone-stamp"} {...others} />);
}

export default Component;
