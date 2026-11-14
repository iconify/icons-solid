import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epwnycb9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm12.25-3.5l4.25-1.25M17.25 10l3.25 1m-15 4.5l-2.5 2M13 9h.01m-2.51 8.5v3m-5.5 0h13");
}
</style><path class="epwnycb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:canary"} {...others} />);
}

export default Component;
