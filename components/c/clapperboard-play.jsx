import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0cx3ez_c {
  d: path("M3 7.5h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm0 0V5a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 5v2.5m-11-4l-2 4m8-4l-2 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jpx36pb7s {
  d: path("m12.317 12.256l.748.486a1.5 1.5 0 0 1 0 2.516l-.748.486A1.5 1.5 0 0 1 10 14.486v-.972a1.5 1.5 0 0 1 2.317-1.258");
}
</style><g class="hntgybcog"><path class="b0cx3ez_c"/><path class="jpx36pb7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:clapperboard-play"} {...others} />);
}

export default Component;
