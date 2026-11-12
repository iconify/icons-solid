import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h3eh08byi {
  stroke-linejoin: round;
  d: path("M14 17L14 7L17 10.4375");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p4tdawz1x {
  stroke-linejoin: round;
  d: path("M10 7L10 17L7 13.5625");
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="p4tdawz1x"/><path class="h3eh08byi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-transfer-vertical-linear"} {...others} />);
}

export default Component;
