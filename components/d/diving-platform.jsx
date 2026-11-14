import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x2ha0z12v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V5A1.5 1.5 0 0 1 5 3.5h2A1.5 1.5 0 0 1 8.5 5v15.5m0-14H19m-16.5 14h19m-10-5q2.5-2 5 0t5 0");
}
</style><path class="x2ha0z12v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:diving-platform"} {...others} />);
}

export default Component;
