import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-xj8zban {
  d: path("M20 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.chx4f6b7j {
  d: path("m14 15 2 2");
}

.d-v-f28sf {
  d: path("M12 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gfyw8vbbf {
  d: path("M7.69 2.37a4 4 0 1 1 -3.38 0");
}

.q1jaj6b2n {
  d: path("M16 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y69n27oio {
  d: path("m20 15 -2 2");
}
</style><g class="s0phu2bbs"><path class="gfyw8vbbf"/><path class="d-v-f28sf"/><path class="c-xj8zban"/><path class="q1jaj6b2n"/><path class="chx4f6b7j"/><path class="y69n27oio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:agent-graph-outline-bold"} {...others} />);
}

export default Component;
