import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ap-miurjd {
  cx: 12px;
  cy: 19.25px;
  r: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lf940mbnz {
  cx: 12px;
  cy: 12px;
  r: 1.25px;
}

.r57sxrb_d {
  cx: 12px;
  cy: 4.75px;
  r: 1.25px;
}
</style><g class="hntgybcog"><circle class="r57sxrb_d"/><circle class="lf940mbnz"/><circle class="ap-miurjd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:more-circle"} {...others} />);
}

export default Component;
