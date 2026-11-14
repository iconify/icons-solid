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

.p4990-inb {
  d: path("M9.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.5 4a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.x8owzmsnl {
  d: path("M12.5 13.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-6 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M5 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m7 7V21");
}

.ycrm45b1o {
  d: path("M10 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="ycrm45b1o"/><path class="p4990-inb"/><path class="x8owzmsnl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:category-flowers"} {...others} />);
}

export default Component;
