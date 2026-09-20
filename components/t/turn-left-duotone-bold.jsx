import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-wplf-uj {
  d: path("M16 21V9H7");
}

.a8qb8pb7w {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 6 7 9l3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qrhk1ib7b {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 21V9H7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wd2ghz3oy {
  d: path("M10 6 7 9l3 3");
}
</style><g class="s0phu2bbs"><path class="qrhk1ib7b"/><path class="a8qb8pb7w"/><path class="a-wplf-uj"/><path class="wd2ghz3oy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:turn-left-duotone-bold"} {...others} />);
}

export default Component;
