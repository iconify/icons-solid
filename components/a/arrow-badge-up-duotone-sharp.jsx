import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.of_mjpwxl {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 15v5l-7-7l-7 7v-9l7-7l7 7z");
}

.pmqpc9kgf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m19 20l-7-7l-7 7v-9l7-7l7 7Z");
}
</style><g class="ft5dv1b6b"><path class="pmqpc9kgf"/><path class="of_mjpwxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-up-duotone-sharp"} {...others} />);
}

export default Component;
