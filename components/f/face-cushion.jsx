import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8hemabir {
  d: path("M6.5 6.75h11a1.75 1.75 0 0 1 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75h-1a5.25 5.25 0 0 0-9 0h-1a1.75 1.75 0 0 1-1.75-1.75v-7A1.75 1.75 0 0 1 6.5 6.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wj7q323uf {
  d: path("M6.5 4h11A4.5 4.5 0 0 1 22 8.5v7a4.5 4.5 0 0 1-4.5 4.5h-3a2.5 2.5 0 0 0-5 0h-3A4.5 4.5 0 0 1 2 15.5v-7A4.5 4.5 0 0 1 6.5 4");
}
</style><g class="hntgybcog"><path class="wj7q323uf"/><path class="g8hemabir"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:face-cushion"} {...others} />);
}

export default Component;
