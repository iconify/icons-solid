import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c37t41bad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20.5v-8A2.5 2.5 0 0 1 6.5 10h4a2.5 2.5 0 0 1 2.5 2.5v8ZM7 10V3.5h7.5v3H10V10m7.5-6.75h.01M20 5.5h.01M17.5 7.75h.01");
}
</style><path class="c37t41bad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lab-cleaning"} {...others} />);
}

export default Component;
