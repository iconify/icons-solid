import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cx4pz1b4o {
  fill: currentColor;
  d: path("M5 8h14l-7 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l9z5uubso {
  d: path("M15 8V5h4v3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.y62iljmfo {
  d: path("M5 8V5h4v3");
}

.yx2y4tasg {
  d: path("M5 8h14l-7 7Z");
}
</style><g class="s0phu2bbs"><path class="cx4pz1b4o"/><path class="yx2y4tasg"/><path class="y62iljmfo"/><path class="l9z5uubso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:nappy-duotone-bold"} {...others} />);
}

export default Component;
