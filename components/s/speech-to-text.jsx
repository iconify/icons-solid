import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9uft2b5s {
  d: path("M6 4za2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 6 13a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 6 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u4a6hrbqj {
  d: path("M2 11a4 4 0 0 0 8 0m-4 4v4m7-11h8m-8 4h8m-8 4h5");
}
</style><g class="hntgybcog"><path class="d9uft2b5s"/><path class="u4a6hrbqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:speech-to-text"} {...others} />);
}

export default Component;
