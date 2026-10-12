import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o1vr3muou {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 5.75h3.5V12h-3.5zM12 12v6.25");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.x3_hipb7b {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 6.5h.01M6.5 12h.01m-.01 5.5h.01m10.99-11h.01M17.5 12h.01m-.01 5.5h.01");
}

.ywno-sh7h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}
</style><g class="ux2u0rbkq"><path class="ywno-sh7h"/><path class="x3_hipb7b"/><path class="o1vr3muou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pegboard-sharp"} {...others} />);
}

export default Component;
