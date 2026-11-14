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

.qphwizhdy {
  d: path("M15.314 12.513Q8.907 14.395 2.5 9V4q9.5 7 19 0v5q-2.751 2.316-5.501 3.291M15.5 19a2.5 2.75 0 1 0 5 0a2.5 2.75 0 1 0-5 0");
}

.wmeuyqb3u {
  d: path("m16.5 15l1.5 1.25L19.5 15m-4.75 4h6.5");
}
</style><g class="hntgybcog"><path class="qphwizhdy"/><path class="wmeuyqb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:flea-collar"} {...others} />);
}

export default Component;
