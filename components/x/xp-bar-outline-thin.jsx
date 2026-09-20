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

.mb3fb7bkl {
  d: path("M17 10v10");
}

.mh_3yqm3z {
  d: path("M3 10h18v10H3Z");
}

.tdul-wdwn {
  d: path("m9 6 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="mh_3yqm3z"/><path class="mb3fb7bkl"/><path class="tdul-wdwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:xp-bar-outline-thin"} {...others} />);
}

export default Component;
