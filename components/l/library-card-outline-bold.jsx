import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j8fsnzfoe {
  d: path("M13 10h6");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.up7bczw9b {
  d: path("M4 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.w8s_cgg4z {
  d: path("M13 14h4");
}

.xrq8zbb_a {
  d: path("M5 15h4");
}
</style><g class="s0phu2bbs"><path class="okud9xj_d"/><path class="up7bczw9b"/><path class="xrq8zbb_a"/><path class="j8fsnzfoe"/><path class="w8s_cgg4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:library-card-outline-bold"} {...others} />);
}

export default Component;
