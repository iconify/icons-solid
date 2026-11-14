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

.lp475fcdg {
  d: path("M2.5 20.5h19V4h-8l-5 16.5");
}

.qco5sfvdy {
  d: path("M17.5 4L16 8.5l2.5 3l-1.75 4");
}
</style><g class="hntgybcog"><path class="lp475fcdg"/><path class="qco5sfvdy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:highwall-crack"} {...others} />);
}

export default Component;
