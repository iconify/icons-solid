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

.ps8-r-j9i {
  d: path("M7 11.75h10a3 3 0 0 0 0-6a5 5 0 0 0-9.5.75a2.75 2.75 0 0 0-.5 5.25M6.5 16a5.5 1.5 0 1 0 11 0a5.5 1.5 0 1 0-11 0");
}

.v3uytxxvt {
  d: path("M6.5 16v4a5.5 1.5 0 0 0 11 0v-4");
}
</style><g class="hntgybcog"><path class="ps8-r-j9i"/><path class="v3uytxxvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cloud-storage"} {...others} />);
}

export default Component;
