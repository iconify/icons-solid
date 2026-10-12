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

.ikirqmbyo {
  cx: 12px;
  cy: 4.25px;
  r: 1.5px;
}

.sgirdibdt {
  d: path("M2.75 12c0-1.93 4.14-3.5 9.25-3.5s9.25 1.57 9.25 3.5s-4.14 3.5-9.25 3.5s-9.25-1.57-9.25-3.5M5 14.4v6.85m14-6.85v6.85m-7-5.75v5.75");
}
</style><g class="hntgybcog"><path class="sgirdibdt"/><circle class="ikirqmbyo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trampoline"} {...others} />);
}

export default Component;
