import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zv-31s0bw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 16L2 6C2 4.3431 3.3431 3 5 3C6.6569 3 8 4.3431 8 6L8 16M8 6C8 4.3431 9.3431 3 11 3C12.6569 3 14 4.3431 14 6L14 14C14 15.6569 15.3431 17 17 17L22 17M17.7071 12.7071L22 17L17.7071 21.2929");
}
</style><path class="zv-31s0bw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:zodiac-scorpio-sharp-duotone"} {...others} />);
}

export default Component;
