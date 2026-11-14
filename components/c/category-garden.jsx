import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qhzmadbzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21h18m-9 0V10m0 0c0-3.5-2.5-5.5-6-5.5C6 8 8.5 10 12 10m0 3c0-3 2.5-5 6-5c0 3-2.5 5-6 5");
}
</style><path class="qhzmadbzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-garden"} {...others} />);
}

export default Component;
