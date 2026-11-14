import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jm9t-0bje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14.5v7m3-.5h7l6.5-4.25a1.75 1.75 0 0 0-2.25-2.25L13.5 17h-4m2.75-8a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M5 2.75q4 0 5.5 2.25");
}
</style><path class="jm9t-0bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:try-catch"} {...others} />);
}

export default Component;
