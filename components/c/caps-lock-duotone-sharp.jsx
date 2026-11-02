import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.r9r8ljblk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 17v-6H4l8-8l8 8h-5v6Z");
}

.rnul6s76m {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H9v-6H4l8-8l8 8h-5v6zm-3 4h6");
}
</style><g class="ft5dv1b6b"><path class="r9r8ljblk"/><path class="rnul6s76m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:caps-lock-duotone-sharp"} {...others} />);
}

export default Component;
