import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xrf1fjb0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.609 7h9.717a1.75 1.75 0 0 1 1.709 2.124l-.984 4.5A1.75 1.75 0 0 1 18.341 15h-7.889a1.75 1.75 0 0 1-1.72-1.427l-.843-4.5A1.75 1.75 0 0 1 9.609 7M4.5 3.5h2L9 15m0 4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M2 10h2.75M2.5 13h3.25");
}
</style><path class="xrf1fjb0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cart-fast"} {...others} />);
}

export default Component;
