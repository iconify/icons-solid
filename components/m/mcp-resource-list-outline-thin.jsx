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

.sk9ov1b7d {
  d: path("M16 7h-3l-3 3v12h10V12");
}

.t-tlxbnvp {
  d: path("M13 2h-3L7 5v12h10V7");
}
</style><g class="hntgybcog"><path class="t-tlxbnvp"/><path class="sk9ov1b7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:mcp-resource-list-outline-thin"} {...others} />);
}

export default Component;
