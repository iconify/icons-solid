import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.imj3qtbsb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5V3h6l2 5l-3 3l5 5l3-3l5 2v6h-2C10.163 21 3 13.837 3 5m12 1a3 3 0 1 0 6 0a3 3 0 0 0-6 0m3 0h.01");
}

.jpf_w6ben {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 5V3h6l2 5l-3 3l5 5l3-3l5 2v6h-2C10.163 21 3 13.837 3 5");
}
</style><g class="ft5dv1b6b"><path class="jpf_w6ben"/><path class="imj3qtbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-record-duotone-sharp"} {...others} />);
}

export default Component;
