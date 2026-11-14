import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n5ejh3c6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 13.5C5 11 6 5 8 5.5s-1 8 1 8c1.5 0 2.5-4.5 4.5-4.5c1.5 0 1 3.5 2.5 3.5c1.25 0 2.5-1.5 4-2.5M3 17.5h9m2.75.5l2 2L21 15.75");
}
</style><path class="n5ejh3c6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:account-mandate"} {...others} />);
}

export default Component;
