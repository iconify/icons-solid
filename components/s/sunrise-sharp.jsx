import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wsjis7b9r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17a3 3 0 0 1 6 0M3 17h2m14 0h2M3 21h18M5 10l2 2m12-2l-2 2m-2-6l-3-3l-3 3m3-3v7");
}
</style><path class="wsjis7b9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sunrise-sharp"} {...others} />);
}

export default Component;
