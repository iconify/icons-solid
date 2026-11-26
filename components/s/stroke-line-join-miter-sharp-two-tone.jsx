import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qwkwe-b6h {
  stroke-opacity: 0.4;
  d: path("M11 22L11 11L22 11");
}

.wtedw3jav {
  d: path("M3 22L3 3L22 3");
}
</style><g class="gp_8x1bzb"><path class="qwkwe-b6h"/><path class="wtedw3jav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:stroke-line-join-miter-sharp-two-tone"} {...others} />);
}

export default Component;
