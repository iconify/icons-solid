import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gb1u4t5es {
  width: 15.5px;
  height: 10.5px;
  x: 2.75px;
  y: 8.75px;
  rx: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hw74-dokv {
  d: path("M6.25 5.25h13a2 2 0 0 1 2 2v8.5");
}

.zfmmpipny {
  d: path("M6.75 16.25v-2m3.75 2v-4m3.75 4v-5.5");
}
</style><g class="hntgybcog"><path class="hw74-dokv"/><rect class="gb1u4t5es"/><path class="zfmmpipny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pitch-deck"} {...others} />);
}

export default Component;
