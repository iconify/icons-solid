import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bc4cf30-k {
  d: path("M12.5 9.25a1.25 1.25 0 0 0-2.5 0a2.5 2.5 0 0 0 5 0m-3 6.5v5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jl4903ezj {
  cx: 12px;
  cy: 9.25px;
  r: 6.5px;
}
</style><g class="hntgybcog"><circle class="jl4903ezj"/><path class="bc4cf30-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lollipop"} {...others} />);
}

export default Component;
