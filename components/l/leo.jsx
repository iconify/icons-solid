import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2f6y-bch {
  cx: 7px;
  cy: 14.75px;
  r: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rpxtbgbtg {
  d: path("M9.75 12.25C8.5 9.75 8 8.25 8 7a4.25 4.25 0 0 1 8.5 0c0 3-2.5 6-2.5 9.5c0 2 1.25 3.5 3 3.5c1 0 2-.5 2.5-1.5");
}
</style><g class="hntgybcog"><path class="rpxtbgbtg"/><circle class="e2f6y-bch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:leo"} {...others} />);
}

export default Component;
