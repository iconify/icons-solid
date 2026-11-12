import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.shu3xdl9q {
  cx: 12px;
  cy: 12px;
  r: 10px;
}

.wbwxu-w2n {
  stroke-linejoin: round;
  d: path("M9 9L15 15M10.5 15L15 15L15 10.5");
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="wbwxu-w2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-arrow-right-down-linear"} {...others} />);
}

export default Component;
