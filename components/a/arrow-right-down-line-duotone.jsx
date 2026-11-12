import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zowiwwbmr {
  d: path("M6 6L18 18");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zyly0dhik {
  d: path("M18 9L18 18L9 18");
}
</style><g class="hntgybcog"><path class="zowiwwbmr"/><path class="zyly0dhik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-down-line-duotone"} {...others} />);
}

export default Component;
