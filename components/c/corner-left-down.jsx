import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g7r2n3-ke {
  d: path("m13 15.5l-3.75 3.75L5.5 15.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it_1vublq {
  d: path("M19.75 4.25h-8a2.5 2.5 0 0 0-2.5 2.5v12.5");
}
</style><g class="hntgybcog"><path class="it_1vublq"/><path class="g7r2n3-ke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corner-left-down"} {...others} />);
}

export default Component;
