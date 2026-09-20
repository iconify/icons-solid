import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a5tuk3h7e {
  d: path("M4 10h16");
}

.akar2ebka {
  d: path("m18 8 -4 -4");
}

.e8hzqfi1p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 10h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g06misnvp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 10v7h16v-7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.scwel3iok {
  d: path("m6 8 4 -4");
}

.u8ba_498e {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m18 8 -4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wfbdffpfj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 8 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xtf0w138e {
  d: path("M4 10v7h16v-7");
}
</style><g class="s0phu2bbs"><path class="g06misnvp"/><path class="e8hzqfi1p"/><path class="wfbdffpfj"/><path class="u8ba_498e"/><path class="xtf0w138e"/><path class="a5tuk3h7e"/><path class="scwel3iok"/><path class="akar2ebka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:drum-duotone-bold"} {...others} />);
}

export default Component;
