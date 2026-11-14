import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v-cg7jcsl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 15a3.5 3.5 0 0 1-1-6.5a5.75 5.75 0 0 1 11 0a3.5 3.5 0 0 1-1 6.5Zm4.5 0v6m0-3l3-3m-8 6h10");
}
</style><path class="v-cg7jcsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:street-tree"} {...others} />);
}

export default Component;
