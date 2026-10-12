import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r4flx6yyu {
  d: path("M6 10L6 14M17.9543 17L15.8719 10.8669L22 13.0514L19.4086 14.3063L17.9543 17Z");
}

.yqcm8cmgm {
  stroke-opacity: 0.4;
  d: path("M21 7L2 7L2 17L13 17");
}
</style><g class="gp_8x1bzb"><path class="yqcm8cmgm"/><path class="r4flx6yyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:input-cursor-sharp-two-tone"} {...others} />);
}

export default Component;
