import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sjtmaab6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3.5h8.5a2.5 2.5 0 0 1 0 5H10l-1.5 8h-4l1.25-8H5a2.5 2.5 0 0 1 0-5m13.5 4l1 4m-5 3v7m3-7v7m3-7v7");
}
</style><path class="sjtmaab6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:barcode-scanner-handheld"} {...others} />);
}

export default Component;
