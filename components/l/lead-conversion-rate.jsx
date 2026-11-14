import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1dg_2byg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18L14 10v3.5l-4 2V10Zm9 15c.9 1.15 1.5 1.85 1.5 2.5a1.5 1.5 0 0 1-3 0c0-.65.6-1.35 1.5-2.5Z");
}
</style><path class="h1dg_2byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lead-conversion-rate"} {...others} />);
}

export default Component;
