import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i6ozxfamn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.099 8.684l3.06 3.295A1.5 1.5 0 0 1 15.06 14.5H8.94a1.5 1.5 0 0 1-1.099-2.521l3.06-3.295a1.5 1.5 0 0 1 2.198 0");
}
</style><path class="i6ozxfamn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:caret-up"} {...others} />);
}

export default Component;
