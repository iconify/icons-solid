import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rwplcd7-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5h14l-1.5 9h-11ZM2.75 12h.01m18.49 0h.01M9 10.5h.01m2.99 0h.01m2.99 0h.01m-4.51 3h.01m2.99 0h.01");
}
</style><path class="rwplcd7-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:port-vga"} {...others} />);
}

export default Component;
