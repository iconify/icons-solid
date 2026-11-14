import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-zm0gbrw {
  d: path("M6.5 2.5L17 18h4");
}

.fx8cznbxj {
  d: path("M17.5 2.5L7 18H3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wy1szv1dk {
  fill: currentColor;
  d: path("M9.75 19.5a2.25 1.5 0 1 0 4.5 0a2.25 1.5 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="d-zm0gbrw"/><path class="fx8cznbxj"/><path class="wy1szv1dk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:face-off"} {...others} />);
}

export default Component;
