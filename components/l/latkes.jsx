import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.egljiubos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9h15v3.75h-15ZM3 12.75h18v3.75H3Zm.75 3.75h16.5v3.75H3.75ZM9 9c0-3 1.75-3 3-5c1.25 2 3 2 3 5");
}
</style><path class="egljiubos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:latkes"} {...others} />);
}

export default Component;
