import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v388-45wt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6h10a4 4 0 0 1 4 4v2h-4v-1a1 1 0 0 0-1-1H3Zm5 0V3M5 3h6m4 11.75L17.25 18a2.5 2.5 0 1 1-4.5 0Z");
}
</style><path class="v388-45wt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:drinking-water-tap"} {...others} />);
}

export default Component;
