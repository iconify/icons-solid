import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4l-upbln {
  stroke-opacity: 0.4;
  d: path("M2 5L2 19M22 5L22 19");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r3nxm48jh {
  d: path("M6 12L18 12M9 9L6 12L9 15M15 9L18 12L15 15");
}
</style><g class="nrj6p8qat"><path class="c4l-upbln"/><path class="r3nxm48jh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-horizontal-duotone"} {...others} />);
}

export default Component;
