import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nhewyjtvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18m-7.658 2.683l1.573 3.146A1.5 1.5 0 0 1 13.573 20h-3.146a1.5 1.5 0 0 1-1.342-2.171l1.573-3.146a1.5 1.5 0 0 1 2.684 0M5 3v5.75M2.75 6.5L5 8.75L7.25 6.5");
}
</style><path class="nhewyjtvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:moment-of-force"} {...others} />);
}

export default Component;
