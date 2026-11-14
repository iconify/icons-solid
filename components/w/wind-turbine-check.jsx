import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.touzcnbmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 8a1.5 1.5 0 1 1-3 0a1.5 1.5 0 1 1 3 0M10 6.5V2M8.75 8.75l-4 2.25m6.5-2.25l4 2.25M10 9.5v12m-2.5 0h5m2.25-3.5l2 2L21 15.75");
}
</style><path class="touzcnbmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:wind-turbine-check"} {...others} />);
}

export default Component;
