import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cekbdq25b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8.5h3V20H5ZM10.5 5h3v15h-3ZM16 8.5h3V20h-3Zm-11 0l1.5-3l1.5 3M10.5 5L12 2.5L13.5 5M16 8.5l1.5-3l1.5 3");
}
</style><path class="cekbdq25b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crayons"} {...others} />);
}

export default Component;
