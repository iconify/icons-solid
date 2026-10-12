import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pwii73hcp {
  d: path("M9.25 12.25L11 14l3.75-4");
}

.shvec_xgt {
  cx: 12px;
  cy: 12px;
  r: 6.5px;
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><circle class="shvec_xgt"/><path class="pwii73hcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:guarantee-badge"} {...others} />);
}

export default Component;
