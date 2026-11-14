import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g5k3bk1ge {
  d: path("M14 2.5v5h5m-11 4h8M8 15h8m-8 3.5h4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s7z1mzabd {
  d: path("M5 2.5h9l5 5v14H5Z");
}
</style><g class="hntgybcog"><path class="s7z1mzabd"/><path class="g5k3bk1ge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:abstract-doc"} {...others} />);
}

export default Component;
