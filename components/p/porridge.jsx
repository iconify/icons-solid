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

.ri_ejgbep {
  d: path("M8 14.25c1.3.9 2.7.9 4 0s2.7-.9 4 0");
}

.wdrjtvbbc {
  d: path("M3.75 11.5h16.5a8.25 6.75 0 0 1-16.5 0M9 21.25h6M14 8.5l3.5-5.75");
}
</style><g class="hntgybcog"><path class="wdrjtvbbc"/><path class="ri_ejgbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:porridge"} {...others} />);
}

export default Component;
