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

.nqndpsbne {
  d: path("M10.5 6.25a3.5 7.25 0 0 0 0 14.5M3.53 11.5q6.97 3.5 13.94 0M19 2.75q.27 1.98 2.25 2.25q-1.98.27-2.25 2.25q-.27-1.98-2.25-2.25q1.98-.27 2.25-2.25");
}

.rmn0_9bsr {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.25px;
}
</style><g class="hntgybcog"><circle class="rmn0_9bsr"/><path class="nqndpsbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:earth-globe-space"} {...others} />);
}

export default Component;
