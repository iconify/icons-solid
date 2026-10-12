import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bie4swl8z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 14.25h7.5");
}

.q1oy59b8h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h18.5v12.5H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ytqem2jgw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 9.75h.01m3.49 0h.01m3.49 0h.01m3.49 0h.01");
}
</style><g class="ux2u0rbkq"><path class="q1oy59b8h"/><path class="ytqem2jgw"/><path class="bie4swl8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:keyboard-sharp"} {...others} />);
}

export default Component;
