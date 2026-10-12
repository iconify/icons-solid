import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dpgxcbb4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 8V5.75a2.5 2.5 0 0 1 2.5-2.5H8m8 0h2.25a2.5 2.5 0 0 1 2.5 2.5V8m0 8v2.25a2.5 2.5 0 0 1-2.5 2.5H16m-8 0H5.75a2.5 2.5 0 0 1-2.5-2.5V16m4.5-8.25v8.5m3-8.5v8.5m2.5-8.5v8.5m3-8.5v8.5M5.25 12h13.5");
}
</style><path class="dpgxcbb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:barcode-scan"} {...others} />);
}

export default Component;
