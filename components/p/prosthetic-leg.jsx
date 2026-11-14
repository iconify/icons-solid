import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a72wtzb_v {
  fill: currentColor;
  d: path("M5.5 19.75H12v1.75H5.5Z");
}

.ppm9jta7x {
  d: path("M7 2.5L8 10h6l1-7.5M11 10c0 3 3.5 4.5 4.5 7.5c.75 2.5-1 4-3.5 4H6M7.5 5.75h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ppm9jta7x"/><path class="a72wtzb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:prosthetic-leg"} {...others} />);
}

export default Component;
