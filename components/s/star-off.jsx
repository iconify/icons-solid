import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cg9_k-j4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 5l1-2l3 6l7 1l-3 3m-1.4 5.6L18 21l-6-3l-6 3l1-6l-5-5l6.125-.875M2 3l19 19");
}
</style><path class="cg9_k-j4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:star-off"} {...others} />);
}

export default Component;
