import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jol95vy1q {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 12.5h.01m10.49 0h.01");
}

.siaez_jfa {
  cx: 12px;
  cy: 12.5px;
  r: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.v7ut8achj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h18.5v10.5H2.75z");
}
</style><g class="ux2u0rbkq"><path class="v7ut8achj"/><circle class="siaez_jfa"/><path class="jol95vy1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:portable-speaker-sharp"} {...others} />);
}

export default Component;
