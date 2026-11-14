import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.roix5jzfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5h6l2.5 3v5h-11v-5Zm-1.5 8l-3.5 8m12.5-8l3.5 8m-9.75-8l-1 8m4.5-8l1 8m-12.25 0h19");
}
</style><path class="roix5jzfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lunar-lander"} {...others} />);
}

export default Component;
