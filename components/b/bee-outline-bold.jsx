import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dqhx63ndl {
  d: path("M16 10c3 -4 6 -1 5 2s-4 2 -5 -2");
}

.i4vwidv3a {
  d: path("M8 10c-3 -4 -6 -1 -5 2s4 2 5 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xqk_x5mcn {
  d: path("M8 9a4 4 0 0 1 8 0v8a4 4 0 0 1 -8 0Z");
}

.y875pzbpu {
  d: path("M8.5 12h7");
}

.zm2dyvb-o {
  d: path("M9 16h6");
}
</style><g class="s0phu2bbs"><path class="xqk_x5mcn"/><path class="y875pzbpu"/><path class="zm2dyvb-o"/><path class="i4vwidv3a"/><path class="dqhx63ndl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:bee-outline-bold"} {...others} />);
}

export default Component;
