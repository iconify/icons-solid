import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qs6gmabba {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h3v7h-3Zm16 0h3v7h-3Zm-13 1.5H8l3-2h3.5l4 3.5m-13 3l5 5q.112.058.232.1q.119.042.243.066q.125.024.251.03t.252-.006t.249-.043t.24-.078t.227-.112t.207-.143l.015-.011m.405-.474q.086-.15.142-.313t.08-.334q.023-.171.012-.343T13 13L9.75 9.75M18 21.5l-3.25-3.25A2 2 0 0 1 18 16a2 2 0 0 1 3.25 2.25Z");
}
</style><path class="qs6gmabba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:heart-handshake"} {...others} />);
}

export default Component;
