import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e-a7jvbtf {
  d: path("M17.25 11L16 8.5l2.5-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iktsbgbfm {
  d: path("M12 2.5v19M4 12a8 4 0 0 0 16 0a8 4 0 0 0-4-3.5");
}
</style><g class="hntgybcog"><path class="iktsbgbfm"/><path class="e-a7jvbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:rotation"} {...others} />);
}

export default Component;
