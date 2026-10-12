import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c444ic2dj {
  d: path("M2.75 7.25h18.5v10.5H2.75z");
}

.enojk2y3g {
  cx: 15.75px;
  cy: 12.5px;
  r: 2.5px;
}

.kt42musmn {
  d: path("M6.5 7.25v-2.5m11 2.5v-2.5M12 7.25V5.5");
}

.p6d06ilmy {
  cx: 8.25px;
  cy: 12.5px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="c444ic2dj"/><circle class="p6d06ilmy"/><circle class="enojk2y3g"/><path class="kt42musmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:adaptive-controller-sharp"} {...others} />);
}

export default Component;
