import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.caz_slbpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9c2.5 1.25 5.5 1.25 8 0a3 3 0 0 1 0 6a9 9 0 0 0-8 0a3 3 0 0 1 0-6M6.25 4.25h11.5M8 2.5L6.25 4.25L8 6m8-3.5l1.75 1.75L16 6M6.25 19.75h11.5M8 18l-1.75 1.75L8 21.5m8-3.5l1.75 1.75L16 21.5");
}
</style><path class="caz_slbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rubber-material"} {...others} />);
}

export default Component;
