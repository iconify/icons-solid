import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e39hvzfhb {
  d: path("M12 2.5c5.5 3.5 7.5 8.5 6 13c-1.25 3.5-4 4.5-6 4.5s-4.75-1-6-4.5c-1.5-4.5.5-9.5 6-13M12 20v1.5m0-1.5V6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tpmyfjqld {
  d: path("m9 9.5l3 3l3-3M8.25 14L12 17l3.75-3");
}
</style><g class="hntgybcog"><path class="e39hvzfhb"/><path class="tpmyfjqld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:leaf-tobacco"} {...others} />);
}

export default Component;
