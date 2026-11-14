import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h4_-gvbqo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.5 5.5zA5.5 5.5 0 0 1 20 11v5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 9 16v-5a5.5 5.5 0 0 1 5.5-5.5m0 0V11M9 11h11M3 3l2 2M2.5 8.5H5m3.5-6v1");
}
</style><path class="h4_-gvbqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mouse-click-left"} {...others} />);
}

export default Component;
