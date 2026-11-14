import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zuy4epb8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.414 10.586za2.5 2.5 0 0 1 0 3.535l-4.242 4.243a2.5 2.5 0 0 1-3.536 0a2.5 2.5 0 0 1 0-3.536l4.243-4.242a2.5 2.5 0 0 1 3.535 0m2.829-2.829l-2.829 2.829m7.071-2.829a3 3 0 0 1-4.242-4.242");
}
</style><path class="zuy4epb8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:carving-gouge"} {...others} />);
}

export default Component;
