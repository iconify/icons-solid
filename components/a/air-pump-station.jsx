import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a2-o0ifih {
  d: path("M5.5 10v11.5h4V10m0 3c3 0 3.5-3.5 6-3.5c1.5 0 1.5 1.5 1.5 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jjom4n9or {
  d: path("M3.5 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}

.mhyc-2c4l {
  d: path("M15.5 17.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.tiew2cx5u {
  d: path("M13 17.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-5.5-11l1.25-1.25");
}
</style><g class="hntgybcog"><path class="jjom4n9or"/><path class="a2-o0ifih"/><path class="tiew2cx5u"/><path class="mhyc-2c4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:air-pump-station"} {...others} />);
}

export default Component;
