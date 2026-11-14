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

.mr_q70s6y {
  d: path("m12 10l5.5 3v5.5l-5.5 3l-5.5-3V13Z");
}

.yzjjsznxg {
  d: path("m6.5 13l5.5 3l5.5-3M12 16v5.5M7 7.25Q5.5 6 7 4.75t0-2.5m5 5Q10.5 6 12 4.75t0-2.5m5 5Q15.5 6 17 4.75t0-2.5");
}
</style><g class="hntgybcog"><path class="mr_q70s6y"/><path class="yzjjsznxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dry-ice"} {...others} />);
}

export default Component;
