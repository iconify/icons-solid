import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.ldh_orbgg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 12v5l-8 4l-8-4V7l8-4l8 4zM9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.qsvuewfsf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 7v10l-8 4l-8-4V7l8-4ZM9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><g class="ft5dv1b6b"><path class="qsvuewfsf"/><path class="ldh_orbgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:settings-alt-duotone-sharp"} {...others} />);
}

export default Component;
