import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azjtlhb3x {
  d: path("M4 18a8 8 0 0 1 16 0");
}

.e8i7n8dqg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 18a8 8 0 0 1 16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hts3l1lgi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 18a5 5 0 0 1 10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.no90vc3pu {
  d: path("M7 18a5 5 0 0 1 10 0");
}

.o27uewb7x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 18a10 10 0 0 1 20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wk7jmzmpf {
  d: path("M9 18a3 3 0 0 1 6 0");
}

.wnx5l5kdh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 18a3 3 0 0 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ydpucsi6v {
  d: path("M2 18a10 10 0 0 1 20 0");
}
</style><g class="s0phu2bbs"><path class="o27uewb7x"/><path class="e8i7n8dqg"/><path class="hts3l1lgi"/><path class="wnx5l5kdh"/><path class="ydpucsi6v"/><path class="azjtlhb3x"/><path class="no90vc3pu"/><path class="wk7jmzmpf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:double-rainbow-duotone-bold"} {...others} />);
}

export default Component;
