import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lp1eksghb {
  d: path("M10 12.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 18v3.25");
}

.p8zb02b3x {
  d: path("m12.77 3.39l5.96 4.97q.77.64-.23.64h-13q-1 0-.23-.64l5.96-4.97q.77-.64 1.54 0");
}

.qgwerpcqh {
  width: 11.5px;
  height: 9px;
  x: 6.25px;
  y: 9px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="p8zb02b3x"/><rect class="qgwerpcqh"/><path class="lp1eksghb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:birdhouse"} {...others} />);
}

export default Component;
