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

.j8os-3bpc {
  d: path("M12 11.5v9.75m0-7L9.75 12m-2 9.25h8.5");
}

.jl4903ezj {
  cx: 12px;
  cy: 9.25px;
  r: 6.5px;
}
</style><g class="hntgybcog"><circle class="jl4903ezj"/><path class="j8os-3bpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tree"} {...others} />);
}

export default Component;
