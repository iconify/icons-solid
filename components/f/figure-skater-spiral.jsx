import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gxhyoqpyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h5v5.5l6 2.5c1.5.5 2 1.5 2 3H6ZM5 17h12.5q2 0 1.5-3M3.5 21.5c4.5-2 10.5-2 17-.5");
}
</style><path class="gxhyoqpyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:figure-skater-spiral"} {...others} />);
}

export default Component;
