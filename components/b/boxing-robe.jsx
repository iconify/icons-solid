import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uh8b59ifh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5L12 9l3-5.5l4.5 2l2 6.5l-4 .5V21h-11v-8.5l-4-.5l2-6.5ZM12 9v12m-5.5-6.5h11");
}
</style><path class="uh8b59ifh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:boxing-robe"} {...others} />);
}

export default Component;
