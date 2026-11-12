import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a44mazz6d {
  stroke-linejoin: round;
  d: path("M9 8.5L12 11.5L15 8.5");
}

.ipq1z-bjh {
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

.wcvy2luch {
  stroke-linejoin: round;
  d: path("M9 12.5L12 15.5L15 12.5");
}
</style><g class="ipq1z-bjh"><circle class="shu3xdl9q"/><path class="a44mazz6d"/><path class="wcvy2luch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-double-alt-arrow-down-linear"} {...others} />);
}

export default Component;
