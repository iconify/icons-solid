import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.enw7kxfof {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4H9v8H4l8 8l8-8h-5V4z");
}

.ft5dv1b6b {
  fill: none;
}

.u551brufx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 4h6v8h5l-8 8l-8-8h5Z");
}
</style><g class="ft5dv1b6b"><path class="u551brufx"/><path class="enw7kxfof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-down-duotone-sharp"} {...others} />);
}

export default Component;
