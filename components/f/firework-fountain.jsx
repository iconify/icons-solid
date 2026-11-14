import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itjlgxs4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 18h10v3H7Zm5-7.5v-8m2.75 8.5L18 4.25M9.25 11L6 4.25m11 8.5l4.25-3.5M7 12.75l-4.25-3.5");
}
</style><path class="itjlgxs4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:firework-fountain"} {...others} />);
}

export default Component;
