import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h3a-tob2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.5v-8a6 6 0 0 1 12 0v8l-2-1.5l-2 1.5l-2-1.5l-2 1.5l-2-1.5Zm4-7.5h.01m3.99 0h.01M16 21.5l.75-2.75L20 15.5l1.75 1.75l-3 3.25Z");
}
</style><path class="h3a-tob2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ghostwriter"} {...others} />);
}

export default Component;
