import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y6adaobnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 5.25h10.5A2.25 2.25 0 0 1 18 7.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 7.5a2.25 2.25 0 0 1 2.25-2.25m3 4.5h10.5A2.25 2.25 0 0 1 21 12a2.25 2.25 0 0 1-2.25 2.25H8.25A2.25 2.25 0 0 1 6 12a2.25 2.25 0 0 1 2.25-2.25m-2 4.5h10.5A2.25 2.25 0 0 1 19 16.5a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 16.5a2.25 2.25 0 0 1 2.25-2.25");
}
</style><path class="y6adaobnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gift-tier-gold"} {...others} />);
}

export default Component;
