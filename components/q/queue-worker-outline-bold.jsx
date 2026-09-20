import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dfcdzc65k {
  d: path("M3 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fevuzkbbx {
  d: path("M15 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.r46fmvbqs {
  d: path("M7 16.5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.spper1bzy {
  d: path("M9 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.tl2fjsrpp {
  d: path("m9.5 9 2.5 2.5L14.5 9");
}
</style><g class="s0phu2bbs"><path class="dfcdzc65k"/><path class="spper1bzy"/><path class="fevuzkbbx"/><path class="tl2fjsrpp"/><path class="r46fmvbqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:queue-worker-outline-bold"} {...others} />);
}

export default Component;
