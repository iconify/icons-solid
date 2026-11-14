import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uthgsacsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3v2.5h5m5 0h5V3m-17 0h4m11 0h4m-12 .75h5v3.5h-5ZM12 10v4.25M9.75 12L12 14.25L14.25 12M3.5 19.25a8.5 2.25 0 1 0 17 0a8.5 2.25 0 1 0-17 0Z");
}
</style><path class="uthgsacsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:drone-landing"} {...others} />);
}

export default Component;
