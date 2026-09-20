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

.q71ix4yfi {
  d: path("m4 5 7 7 -7 7Z");
}

.um-4xc65y {
  d: path("m12 5 7 7 -7 7");
}
</style><g class="hntgybcog"><path class="q71ix4yfi"/><path class="um-4xc65y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:test-double-outline-thin"} {...others} />);
}

export default Component;
