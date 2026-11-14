import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lip_v2bvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 6l4 4h8l2-3.5L17 4l1.5 2l3 1.25L21 9.5l-3 .5l-1.5 4h-9c-1 0-1.5-1.5-1-4m14 9l-5-5l-2 5.5M3 18.5L8 14l2 5.5");
}
</style><path class="lip_v2bvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dog-running"} {...others} />);
}

export default Component;
