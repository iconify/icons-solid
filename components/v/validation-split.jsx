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

.o93bxhbfb {
  d: path("m13.25 12.25l1.5 1.5l3-3");
}

.z60l6sbgc {
  d: path("M9.75 5.25h-5a2 2 0 0 0-2 2v9.5a2 2 0 0 0 2 2h5Zm0 0h9.5a2 2 0 0 1 2 2v9.5a2 2 0 0 1-2 2h-9.5Z");
}
</style><g class="hntgybcog"><path class="z60l6sbgc"/><path class="o93bxhbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:validation-split"} {...others} />);
}

export default Component;
