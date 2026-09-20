import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.az1hpy9gr {
  d: path("M12 9v12");
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.rzvp5cbis {
  fill: currentColor;
  d: path("m6 6 3 -3h3v6H9Z");
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

.t6hbaucfr {
  d: path("m6 6 3 -3h3v6H9Z");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="s0phu2bbs"><path class="rzvp5cbis"/><path class="az1hpy9gr"/><path class="xslfg2evh"/><path class="t6hbaucfr"/><path class="l0v-b4kbr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:wind-vane-duotone-bold"} {...others} />);
}

export default Component;
