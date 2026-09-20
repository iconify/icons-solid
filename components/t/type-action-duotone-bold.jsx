import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kdztqobrs {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 9h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.layh4jhoz {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m9bp_h76g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 15h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.md3qg6xkk {
  d: path("M4 6v12");
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wvee1b7zr {
  d: path("M8 15h12");
}
</style><g class="s0phu2bbs"><path class="layh4jhoz"/><path class="kdztqobrs"/><path class="m9bp_h76g"/><path class="md3qg6xkk"/><path class="pty_wsbvs"/><path class="wvee1b7zr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:type-action-duotone-bold"} {...others} />);
}

export default Component;
