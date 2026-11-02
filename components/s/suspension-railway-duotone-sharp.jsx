import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewylibb5k {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20V9h14l4 4v7zm0-4h18M11 9v7M3 4h18M7 4v5m8-5v5");
}

.ft5dv1b6b {
  fill: none;
}

.xd737zm8x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M2 20V9a1 1 0 0 1 1-1h14c.265 0 .52.105.707.293l4 4A1 1 0 0 1 22 13v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1");
}
</style><g class="ft5dv1b6b"><path class="xd737zm8x"/><path class="ewylibb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:suspension-railway-duotone-sharp"} {...others} />);
}

export default Component;
