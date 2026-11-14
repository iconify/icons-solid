import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hz5dusbod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.5a3.5 3.5 0 0 1 0-7a5 5 0 0 1 9.5-1a4 4 0 0 1 .5 8Zm5.5 2.75l-2 2.75h3l-2 2.75M7 16.25l-1 3m11.5-3l-1 3");
}
</style><path class="hz5dusbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-storm"} {...others} />);
}

export default Component;
