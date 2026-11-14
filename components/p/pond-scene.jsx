import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.maxs-gm0m {
  d: path("M10.5 13q0-5.5 3-9");
}

.p82-2oo3g {
  d: path("M2.5 17a9.5 4 0 1 0 19 0a9.5 4 0 1 0-19 0Z");
}

.tae-3mqvk {
  fill: currentColor;
  d: path("M5.75 3h2.5v5.5h-2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zour_mppf {
  d: path("M8 17q2-1.25 4 0t4 0M7 8.5v5");
}
</style><g class="ulnmmdpxh"><path class="p82-2oo3g"/><path class="zour_mppf"/><path class="tae-3mqvk"/><path class="maxs-gm0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pond-scene"} {...others} />);
}

export default Component;
