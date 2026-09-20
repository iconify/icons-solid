import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c0xrb9bxf {
  d: path("m17 2 -3 3h3l-4 4");
}

.mh_3yqm3z {
  d: path("M3 10h18v10H3Z");
}

.mk-ueebig {
  d: path("M9 10v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t7ah1ybjn {
  d: path("M19 5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="mh_3yqm3z"/><path class="mk-ueebig"/><path class="c0xrb9bxf"/><path class="t7ah1ybjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mana-outline-bold"} {...others} />);
}

export default Component;
