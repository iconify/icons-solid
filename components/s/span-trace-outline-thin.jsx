import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h50arts9k {
  d: path("M6 12h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p7nia1b6j {
  d: path("M3 7h16");
}

.x3jqftbaj {
  d: path("M9 17h12");
}
</style><g class="hntgybcog"><path class="p7nia1b6j"/><path class="h50arts9k"/><path class="x3jqftbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:span-trace-outline-thin"} {...others} />);
}

export default Component;
