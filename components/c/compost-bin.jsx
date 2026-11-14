import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fh2lr4b6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.208 10h11.584a1.5 1.5 0 0 1 1.487 1.694l-1.109 8.5a1.5 1.5 0 0 1-1.487 1.306H6.317a1.5 1.5 0 0 1-1.487-1.306l-1.109-8.5A1.5 1.5 0 0 1 5.208 10M12 10l8.5-5M6 10c0-3.5 2-6 5.5-6.5c0 3.5-2 6-5.5 6.5");
}
</style><path class="fh2lr4b6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:compost-bin"} {...others} />);
}

export default Component;
