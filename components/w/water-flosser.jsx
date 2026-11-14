import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uxht_0bbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19v-8c0-1.5 1-2.5 3-2.5s3 1 3 2.5v8A2.5 2.5 0 0 1 8 21.5H7A2.5 2.5 0 0 1 4.5 19Zm3-10.5v-3l3-3m-3 10v3m11-1.25L16 17a2.75 2.75 0 1 0 5 0Z");
}
</style><path class="uxht_0bbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:water-flosser"} {...others} />);
}

export default Component;
