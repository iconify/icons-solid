import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eh27umomo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.198 13H2.5L6 3h13.5l-1.647 8.237M10 13v7.5M4.25 8H18.5m-8-5l-3 10M15 3l-2.5 10m5.5 8v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="eh27umomo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:solar-production"} {...others} />);
}

export default Component;
