import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffzadgbho {
  d: path("M3.75 18.25h3.5m9.5 0h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.juap84dhf {
  cx: 12px;
  cy: 18.25px;
  r: 2.25px;
}

.nm008x03r {
  d: path("M5 12.5a7 7 0 0 1 14 0m-2.25-2.25L19 12.5l2.25-2.25");
}
</style><g class="hntgybcog"><path class="nm008x03r"/><circle class="juap84dhf"/><path class="ffzadgbho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:debug-step"} {...others} />);
}

export default Component;
