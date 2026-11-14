import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w6-ag-brt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7l3-2.5L9 7l3-2.5L15 7l3-2.5L21 7M3 13l3-2.5L9 13l3-2.5l3 2.5l3-2.5l3 2.5M3 19l3-2.5L9 19l3-2.5l3 2.5l3-2.5l3 2.5");
}
</style><path class="w6-ag-brt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wave-choppy"} {...others} />);
}

export default Component;
