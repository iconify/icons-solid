import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h-3tp7bgo {
  d: path("M15.5 8.5L13 14l3 3v4m-3-7l-1.5 3L9 18.5M3.5 10h4m-4 4H8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vt7s1mwiz {
  d: path("M15.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-4.75 7L13 8.5h3.5l2.5 3");
}
</style><g class="hntgybcog"><path class="vt7s1mwiz"/><path class="h-3tp7bgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mode-sports"} {...others} />);
}

export default Component;
