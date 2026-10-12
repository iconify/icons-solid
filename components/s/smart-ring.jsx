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

.hsg5pubci {
  cx: 12px;
  cy: 14px;
  r: 4.5px;
}

.r6uvok62f {
  cx: 12px;
  cy: 14px;
  r: 7.25px;
}

.t1shncb3t {
  d: path("M9 4.5a4.25 4.25 0 0 1 6 0");
}
</style><g class="hntgybcog"><circle class="r6uvok62f"/><circle class="hsg5pubci"/><path class="t1shncb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:smart-ring"} {...others} />);
}

export default Component;
