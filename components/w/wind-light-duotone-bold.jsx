import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.byz9m5b8d {
  d: path("M3 8h16");
}

.nx6-lsb9m {
  d: path("M5 15h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wpzyegbbh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 15h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y73rjk5ux {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 8h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="y73rjk5ux"/><path class="wpzyegbbh"/><path class="byz9m5b8d"/><path class="nx6-lsb9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:wind-light-duotone-bold"} {...others} />);
}

export default Component;
