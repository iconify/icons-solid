import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c46x2570c {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.75 11h.01M15 13.25h.01M17.25 11h.01");
}

.k4wyinbih {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 21.25V2.75H15V4M3 21.25h5");
}

.mtyi5cckm {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 7.5a3.5 3.5 0 0 1 7 0Zm-2-4.75V10");
}

.oic94lxlh {
  cx: 9.5px;
  cy: 12.25px;
  r: 1.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="k4wyinbih"/><path class="mtyi5cckm"/><circle class="oic94lxlh"/><path class="c46x2570c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:safety-shower-sharp"} {...others} />);
}

export default Component;
