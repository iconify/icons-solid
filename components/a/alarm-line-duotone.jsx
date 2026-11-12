import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nd-3gubon {
  cx: 12px;
  cy: 13px;
  r: 9px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.pfllnjb4h {
  stroke-linejoin: round;
  d: path("M20.5 4.5L16.5 2");
}

.x_g6k5bwe {
  stroke-linejoin: round;
  d: path("M12 9V13L14.5 15.5");
}

.x43s2zn6y {
  stroke-linejoin: round;
  d: path("M3.5 4.5L7.50002 2");
}
</style><g class="ipq1z-bjh"><circle class="nd-3gubon"/><path class="x_g6k5bwe"/><path class="x43s2zn6y"/><path class="pfllnjb4h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alarm-line-duotone"} {...others} />);
}

export default Component;
