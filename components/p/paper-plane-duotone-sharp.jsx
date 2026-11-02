import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.ilb6m4blk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m21.949 3.316l-6 18a1 1 0 0 1-1.843.131l-3.851-7.702l-7.702-3.851a1 1 0 0 1 .131-1.843l18-6a1.001 1.001 0 0 1 1.265 1.265");
}

.o7-_vlb_v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 3L3 9l8 4l4 8zM11 13l3-3");
}
</style><g class="ft5dv1b6b"><path class="ilb6m4blk"/><path class="o7-_vlb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paper-plane-duotone-sharp"} {...others} />);
}

export default Component;
