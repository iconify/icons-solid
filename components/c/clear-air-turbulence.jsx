import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ok1c5wbvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7.5l3-3l3 3l3-3l3 3l3-3l3 3m-16.5 6l3-3l3 3l3-3l3 3l3-3M3 19.5l3-3l3 3l3-3l3 3l3-3l3 3");
}
</style><path class="ok1c5wbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:clear-air-turbulence"} {...others} />);
}

export default Component;
