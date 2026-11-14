import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.adgol0ftx {
  d: path("M13 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M13.5 8L10 12l3.5 3.5l-2 2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w5vmnrbke {
  d: path("M13.25 9.25L17 11.5l2.5 5.75M3.5 16l17 4.75M2.5 8h4m-3 3h3");
}
</style><g class="hntgybcog"><path class="adgol0ftx"/><path class="w5vmnrbke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:skier-downhill"} {...others} />);
}

export default Component;
