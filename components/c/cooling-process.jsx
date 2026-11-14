import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ki5hfeb2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.5v16m-7-12l11.697 6.741M3.5 14.5l14-8M8.75 3.25L10.5 5l1.75-1.75m-3.5 14.5L10.5 16l1.503 1.503M15.5 5.5L14.75 8l2.5.75M5.5 15.5l.75-2.5l-2.5-.75M5.5 5.5L6.25 8l-2.5.75M18 14.5v7m-3-3l3 3l3-3");
}
</style><path class="ki5hfeb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cooling-process"} {...others} />);
}

export default Component;
