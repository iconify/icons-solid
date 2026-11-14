import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfcwl2s0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM8.5 8v6.5M6 21l2.5-6.5L11 21m-5-8.5l2.5-3l4 2.5m0 0l5.5 9");
}
</style><path class="dfcwl2s0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:person-white-cane"} {...others} />);
}

export default Component;
