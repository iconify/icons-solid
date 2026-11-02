import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgiq_22af {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 6a4.242 4.242 0 1 1 6 6l-7 7l-7-7a4.242 4.242 0 1 1 6-6l1 1Z");
}

.ft5dv1b6b {
  fill: none;
}

.xoycmbcij {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 7l1-1a4.243 4.243 0 0 1 6 6l-7 7l-7-7a4.243 4.243 0 0 1 6-6z");
}
</style><g class="ft5dv1b6b"><path class="cgiq_22af"/><path class="xoycmbcij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heart-alt-duotone-sharp"} {...others} />);
}

export default Component;
