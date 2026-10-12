import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a698yib6r {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.25v7.5m-6.75 0v-4h13.5v4");
}

.f_r2wnagk {
  cx: 18.75px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l_77f6rkn {
  cx: 5.25px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m79cmbb6o {
  cx: 12px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p2fbip8uo {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 2.75h8.5v6.5h-8.5z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.wy4yrcc5j {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.25 6h.01m3.49 0h.01");
}
</style><g class="ux2u0rbkq"><path class="p2fbip8uo"/><path class="wy4yrcc5j"/><path class="a698yib6r"/><circle class="l_77f6rkn"/><circle class="m79cmbb6o"/><circle class="f_r2wnagk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:orchestrator-sharp"} {...others} />);
}

export default Component;
