import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ba2-z1m9x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m9 10 -4 4 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m7v_-fb1c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 4v10H5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o9x6y_bij {
  d: path("m9 10 -4 4 4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wptmod37f {
  d: path("M21 4v10H5");
}
</style><g class="s0phu2bbs"><path class="m7v_-fb1c"/><path class="ba2-z1m9x"/><path class="wptmod37f"/><path class="o9x6y_bij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:command-duotone-bold"} {...others} />);
}

export default Component;
