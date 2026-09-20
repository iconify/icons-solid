import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ahs1ngbdq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 17h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e1s2le8fv {
  d: path("M5 10h6");
}

.j5mru3ysi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 10h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kgbn5sfiy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 17h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lmc6jyb6f {
  d: path("M14 10h7");
}

.m2tqx_djr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M14 10h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p41-m0bke {
  d: path("M5 17h6");
}

.s_qnepbtm {
  d: path("M5 3v14");
}

.vg0qlegui {
  d: path("M14 17h7");
}

.ytuhsbc_q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 3v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="ytuhsbc_q"/><path class="j5mru3ysi"/><path class="m2tqx_djr"/><path class="ahs1ngbdq"/><path class="kgbn5sfiy"/><path class="s_qnepbtm"/><path class="e1s2le8fv"/><path class="lmc6jyb6f"/><path class="p41-m0bke"/><path class="vg0qlegui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:list-tree-duotone-regular"} {...others} />);
}

export default Component;
