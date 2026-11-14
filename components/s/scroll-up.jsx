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

.mmq5b7x6p {
  d: path("M6.5 17V4.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M6.25 17h11.5A2.25 2.25 0 0 1 20 19.25a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.25A2.25 2.25 0 0 1 6.25 17M12 13.5V6");
}

.vh29fpbxk {
  d: path("M9.25 8.75L12 6l2.75 2.75");
}
</style><g class="hntgybcog"><path class="mmq5b7x6p"/><path class="vh29fpbxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:scroll-up"} {...others} />);
}

export default Component;
