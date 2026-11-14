import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvhuvwbgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.48 3.752l1.768 1.768l-5.657 5.657l-1.768-1.768Zm-6.541 4.773l3.536 3.536l-4.596 4.596l-3.536-3.536ZM5.5 16.75l1.5 2a1.75 1.75 0 1 1-3 0Z");
}
</style><path class="bvhuvwbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:paint-touchup"} {...others} />);
}

export default Component;
