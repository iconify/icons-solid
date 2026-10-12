import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iybxurbol {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 10.5h.01m8.49 0h.01M8.5 16.75h.01m6.99 0h.01");
}

.pg3h505qa {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.25v5M4.75 6.5l3 4h8.5l3-4M12 13.25l-3.5 3.5v4m3.5-7.5l3.5 3.5v4");
}

.sb4kn6-oq {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="sb4kn6-oq"/><path class="pg3h505qa"/><path class="iybxurbol"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pose-detect-sharp"} {...others} />);
}

export default Component;
