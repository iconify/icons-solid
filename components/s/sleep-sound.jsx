import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gv7j58bfz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.5a7.5 7.5 0 0 0 0 15a9 9 0 0 1 0-15m3 4a5 5 0 0 1 0 7m3.5-10a9 9 0 0 1 0 13");
}
</style><path class="gv7j58bfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sleep-sound"} {...others} />);
}

export default Component;
