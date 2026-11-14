import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-ibcsg8z {
  d: path("M12 10.25L10.75 14l2.5 2.5L12 20m0-12.5C10.5 6 13.5 4.75 12 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ngst1z7fs {
  d: path("M2.5 20c0-7 4-8.5 6-6C10 9 15 9 16 13c1.5-2 5.5-1 5.5 7Z");
}
</style><g class="hntgybcog"><path class="ngst1z7fs"/><path class="g-ibcsg8z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lava-field"} {...others} />);
}

export default Component;
