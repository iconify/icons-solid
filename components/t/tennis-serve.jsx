import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r42tcdcox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5a4.5 6 0 1 0 9 0a4.5 6 0 1 0-9 0Zm4.5 6v7M15 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM9 2.5v12m-4.5-6h9");
}
</style><path class="r42tcdcox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:tennis-serve"} {...others} />);
}

export default Component;
