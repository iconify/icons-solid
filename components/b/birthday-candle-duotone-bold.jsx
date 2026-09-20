import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.facaoccxd {
  d: path("M8 21V11h8v10Z");
}

.iv55jvbip {
  fill: currentColor;
  d: path("M12 9c-2.5 -2 -2.5 -5 0 -7 2.5 2 2.5 5 0 7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.twp5c8mgm {
  fill: currentColor;
  d: path("M8 21V11h8v10Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wv_9g9b3l {
  d: path("M12 9c-2.5 -2 -2.5 -5 0 -7 2.5 2 2.5 5 0 7");
}
</style><g class="s0phu2bbs"><path class="twp5c8mgm"/><path class="iv55jvbip"/><path class="facaoccxd"/><path class="c4khiwgvb"/><path class="wv_9g9b3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:birthday-candle-duotone-bold"} {...others} />);
}

export default Component;
