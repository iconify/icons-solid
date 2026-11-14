import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.npmowiy7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16h15v5H3Zm3-5h15v5H6ZM4 7.25a8 3.5 0 1 0 16 0a8 3.5 0 1 0-16 0Zm4.5 0h.01m3.49 0h.01m3.49 0h.01");
}
</style><path class="npmowiy7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rice-cakes"} {...others} />);
}

export default Component;
