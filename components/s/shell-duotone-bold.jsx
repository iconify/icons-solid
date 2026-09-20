import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gy18-zqeb {
  d: path("M14 19h7");
}

.rbwzp5g7d {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m4 5 7 7 -7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y0676ebxw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M14 19h7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y0c1235en {
  d: path("m4 5 7 7 -7 7");
}
</style><g class="s0phu2bbs"><path class="rbwzp5g7d"/><path class="y0676ebxw"/><path class="y0c1235en"/><path class="gy18-zqeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:shell-duotone-bold"} {...others} />);
}

export default Component;
