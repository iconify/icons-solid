import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sdo46rbxu {
  stroke-opacity: 0.4;
  d: path("M16 15v6m4-6v6");
}

.z-u-ue7vh {
  d: path("M19 11a8 8 0 1 0-8 8m0-12v4h3");
}
</style><g class="nrj6p8qat"><path class="sdo46rbxu"/><path class="z-u-ue7vh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-pause-duocolor-sharp"} {...others} />);
}

export default Component;
