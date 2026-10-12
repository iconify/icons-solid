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

.hp1fi4b9p {
  d: path("M7 11.5c1.75-1 3.25-1.5 5-1.5s3.25.5 5 1.5v2c0 2.5-2.5 4.5-5 4.5s-5-2-5-4.5Zm3.75 2.75h2.5m-6.25-2L5.75 11M17 12.25L18.25 11");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="hp1fi4b9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:respirator-required"} {...others} />);
}

export default Component;
