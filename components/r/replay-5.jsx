import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ghtz8h6wm {
  d: path("M12 5.5a7.5 7.5 0 1 1-6.495 3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zsys9-bft {
  d: path("m15 2.5l-3 3l3 3m-1.5 2h-2.75l-.25 2.25c.5-.25 1-.25 1.5-.25c1 0 1.75.75 1.75 1.5c0 1-.75 1.5-1.75 1.5q-1.125 0-1.5-.75");
}
</style><g class="hntgybcog"><path class="ghtz8h6wm"/><path class="zsys9-bft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:replay-5"} {...others} />);
}

export default Component;
