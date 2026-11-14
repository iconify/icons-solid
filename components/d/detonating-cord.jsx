import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jdbaq4zmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h11m5 0h3m-3.75 1.75L20 16m-4-1.5v3m-1.75-3.75L12 16m2.25-5.75L12 8m4 1.5v-3m1.75 3.75L20 8");
}
</style><path class="jdbaq4zmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:detonating-cord"} {...others} />);
}

export default Component;
