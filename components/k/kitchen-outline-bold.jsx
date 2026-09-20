import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ils4s2bwq {
  d: path("M14 3v6h7V3Z");
}

.ldbufzbne {
  d: path("M4 13v8h16v-8");
}

.ok9ioqb8x {
  d: path("M4 17h16");
}

.qqfu2d8ae {
  d: path("M3 3v6h7V3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="s0phu2bbs"><path class="qqfu2d8ae"/><path class="ils4s2bwq"/><path class="zugrvnb7t"/><path class="ldbufzbne"/><path class="ok9ioqb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:kitchen-outline-bold"} {...others} />);
}

export default Component;
