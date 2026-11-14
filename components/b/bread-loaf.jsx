import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l9oqab9vq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 19v-5.5C2.75 9.5 6.5 7 12 7s9.25 2.5 9.25 6.5V19Zm3.75-7.5l1.5 2m3.25-2.5l1.5 2M16 11.5l1.5 2");
}
</style><path class="l9oqab9vq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bread-loaf"} {...others} />);
}

export default Component;
