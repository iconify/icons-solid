import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ep2k6ixep {
  d: path("M2.75 21.25H7v-3.5h4.75v-3.5h4.75v-3.5h4.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hvwhfobtw {
  d: path("m9 7.25l1.25 3.25m0 0l-.75 7.25m.75-7.25l3.5 1l-.25 2.75m-4-5.75l3 1L14 7.75");
}

.n-vrqob0o {
  cx: 8.75px;
  cy: 4.5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><path class="ep2k6ixep"/><circle class="n-vrqob0o"/><path class="hvwhfobtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:stair-climber"} {...others} />);
}

export default Component;
