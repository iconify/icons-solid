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

.ijosq8oij {
  d: path("M7 21.5h9a1.5 1.5 0 0 0 1.5-1.5");
}

.o1rau_1uu {
  d: path("M8.75 5.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25 6V16m-2.25 5.5L12 16l2.25 5.5M6 13h12");
}
</style><g class="hntgybcog"><path class="o1rau_1uu"/><path class="ijosq8oij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:skater-child"} {...others} />);
}

export default Component;
