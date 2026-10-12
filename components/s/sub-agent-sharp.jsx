import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8ankl6hl {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12.75v5.5h4.25m0-5h8v8h-8z");
}

.j24_5sbhb {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 7.75h.01m4.49 0h.01");
}

.l2m9qfpvx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 17.25h.01m2.99 0h.01");
}

.qwn7iwbtj {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h12.5v10H2.75z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="qwn7iwbtj"/><path class="j24_5sbhb"/><path class="c8ankl6hl"/><path class="l2m9qfpvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sub-agent-sharp"} {...others} />);
}

export default Component;
