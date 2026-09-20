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

.t03dwshwl {
  d: path("M7 11v6l3 3h4l3 -3v-6");
}

.ywohddcxs {
  d: path("M12 2.5 15.5 6a3.5 3.5 0 1 1 -7 0Z");
}
</style><g class="hntgybcog"><path class="t03dwshwl"/><path class="ywohddcxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:water-intake-outline-thin"} {...others} />);
}

export default Component;
