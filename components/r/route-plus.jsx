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

.mr52dqd-k {
  d: path("M8.5 18.5h8.25a3.25 3.25 0 0 0 0-6.5h-9.5a3.25 3.25 0 0 1 0-6.5h8.25");
}

.pr33wacdx {
  cx: 6px;
  cy: 18.5px;
  r: 2.5px;
}

.ywfc_z2mj {
  cx: 18px;
  cy: 5.5px;
  r: 2.5px;
}
</style><g class="hntgybcog"><circle class="pr33wacdx"/><circle class="ywfc_z2mj"/><path class="mr52dqd-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:route-plus"} {...others} />);
}

export default Component;
