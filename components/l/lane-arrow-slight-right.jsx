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

.va7z2nkam {
  d: path("M10.5 2.5h6v6");
}

.y7myatbod {
  d: path("M8 21.5V13q0-2 2-4l6.5-6.5");
}
</style><g class="hntgybcog"><path class="y7myatbod"/><path class="va7z2nkam"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:lane-arrow-slight-right"} {...others} />);
}

export default Component;
