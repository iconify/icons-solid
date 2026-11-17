import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.auwowsroz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 15l3 6H4l3-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.jr02fp_yr {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 3v6L4 21h16L14 9V3M8 3h8M7 15h10");
}
</style><g class="ft5dv1b6b"><path class="auwowsroz"/><path class="jr02fp_yr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flask-duotone-sharp"} {...others} />);
}

export default Component;
