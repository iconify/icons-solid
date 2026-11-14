import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pxjcp90ym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5h19m-16 0l4-4.5h5l4 4.5M8.5 13c-2-2.5 2-5.5 0-8.5m3.5 8c-2-3 2-6 0-9.5m3.5 10c-2-2.5 2-5.5 0-8.5");
}
</style><path class="pxjcp90ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:geothermal-vent"} {...others} />);
}

export default Component;
