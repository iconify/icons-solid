import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lymv6swgc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5m9 0s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5m-9 10.5s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5m9 0s-3 3-3 4.5a3 3 0 0 0 6 0c0-1.5-3-4.5-3-4.5");
}
</style><path class="lymv6swgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ink-drops-cmyk"} {...others} />);
}

export default Component;
