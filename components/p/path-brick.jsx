import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0z5bbxud {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.658 19.526l5-15A1.5 1.5 0 0 1 10.081 3.5h3.838a1.5 1.5 0 0 1 1.423 1.026l5 15a1.5 1.5 0 0 1-1.423 1.974H5.081a1.5 1.5 0 0 1-1.423-1.974M5 15.5h14m-12-6h10m-5 12v-6m-2.5 0v-6m5 6v-6m-2.5 0v-6");
}
</style><path class="u0z5bbxud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:path-brick"} {...others} />);
}

export default Component;
