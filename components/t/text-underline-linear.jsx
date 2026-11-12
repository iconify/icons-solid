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

.poyc1firz {
  d: path("M4 21H20");
}

.v2ny-hbsj {
  d: path("M4 3V9C4 13.4183 7.58172 17 12 17C16.4183 17 20 13.4183 20 9V3");
}
</style><g class="hntgybcog"><path class="poyc1firz"/><path class="v2ny-hbsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-underline-linear"} {...others} />);
}

export default Component;
