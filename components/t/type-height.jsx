import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ddkwn2gex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7V6C2 4.8954 2.8954 4 4 4H10C11.1046 4 12 4.8954 12 6V7M7 4V20M3.5 20H10.5M19 20V4M16 7L19 4L22 7M16 17L19 20L22 17");
}
</style><path class="ddkwn2gex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:type-height"} {...others} />);
}

export default Component;
