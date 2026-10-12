import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.chdqh_zhk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h9.5v18.5h-9.5z");
}

.fncz6gbqd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.75 6.5h.01m3.49 0h.01M7.75 10h.01m3.49 0h.01m-3.51 3.5h.01m3.49 0h.01");
}

.q67jh0b2x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 17.25h7");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="chdqh_zhk"/><path class="fncz6gbqd"/><path class="q67jh0b2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:keypad-lock-sharp"} {...others} />);
}

export default Component;
