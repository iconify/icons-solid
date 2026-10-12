import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uxf8w4bro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 10C2 8.8954 2.8954 8 4 8L20 8C21.1046 8 22 8.8954 22 10L22 14C22 15.1046 21.1046 16 20 16L4 16C2.8954 16 2 15.1046 2 14L2 10Z");
}
</style><path class="uxf8w4bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:ratio-21-9-duotone"} {...others} />);
}

export default Component;
