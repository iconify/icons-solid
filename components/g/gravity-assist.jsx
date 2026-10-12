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

.jumqf8ewo {
  d: path("M2.75 6.75H12a7.25 7.25 0 0 1 3.06 13.82m2.42.65l-2.42-.65l1.06-2.27");
}

.r82p9vbru {
  cx: 12px;
  cy: 14px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="r82p9vbru"/><path class="jumqf8ewo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:gravity-assist"} {...others} />);
}

export default Component;
