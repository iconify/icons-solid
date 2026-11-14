import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v0qzg5b0j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 4h3.25A2.625 2.625 0 0 1 11.5 6.625v2.25A2.625 2.625 0 0 1 8.875 11.5h-3.25A2.625 2.625 0 0 1 3 8.875v-2.25A2.625 2.625 0 0 1 5.625 4M15 5.5h6M15 10h6M3 15h18M3 19.5h12");
}
</style><path class="v0qzg5b0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:text-wrap-around"} {...others} />);
}

export default Component;
