import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aq5ydbtto {
  d: path("m16 5 -2.5 2.5");
}

.b6v15s2sv {
  d: path("M16.5 11H21");
}

.gc_u7gkmh {
  d: path("m8 5 2.5 2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okx82l_9n {
  d: path("M3 11h4.5");
}

.t12-ippwj {
  d: path("M7 13a5 5 0 1 0 10 0 5 5 0 1 0 -10 0");
}

.tjrb92etf {
  d: path("M3 15h4.5");
}

.zdgbjmbif {
  d: path("M16.5 15H21");
}
</style><g class="nrj6p8qat"><path class="t12-ippwj"/><path class="okx82l_9n"/><path class="b6v15s2sv"/><path class="tjrb92etf"/><path class="zdgbjmbif"/><path class="gc_u7gkmh"/><path class="aq5ydbtto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:debug-outline-regular"} {...others} />);
}

export default Component;
