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

.sg3l-hmnc {
  d: path("M8.5 6.5a2 2 0 1 1 0 4a2 2 0 1 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 1 1 0-4m-7 7a2 2 0 1 1 0 4a2 2 0 1 1 0-4m7 0a2 2 0 1 1 0 4a2 2 0 1 1 0-4");
}

.sod_fohcf {
  width: 17.5px;
  height: 17.5px;
  x: 3.25px;
  y: 3.25px;
  rx: 3px;
}
</style><g class="hntgybcog"><rect class="sod_fohcf"/><path class="sg3l-hmnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:muffin-tin"} {...others} />);
}

export default Component;
