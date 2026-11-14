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

.idi-ydbun {
  d: path("M9 3.5h6l4.5 9a12 12 0 0 1-15 0Z");
}

.mroln1hog {
  d: path("M10.5 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8 17.5L7 21m5-3v3.5m4-4l1 3.5");
}
</style><g class="hntgybcog"><path class="idi-ydbun"/><path class="mroln1hog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:capsule-reentry"} {...others} />);
}

export default Component;
