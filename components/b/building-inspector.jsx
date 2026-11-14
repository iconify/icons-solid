import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wlzus_xfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.75h2a5.5 5.5 0 0 1 11 0h2Zm3.5 0v1.5a4 4 0 0 0 8 0v-1.5M4 21c0-2.25 3.499-3.749 7.997-3.75m7.981 3.444q.022.15.022.306m-5.25-3l2 2L21 15.75");
}
</style><path class="wlzus_xfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:building-inspector"} {...others} />);
}

export default Component;
