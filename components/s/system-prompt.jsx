import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fpn4ubbrd {
  d: path("m6.25 7l2 1.75l-2 1.75m4 0h2M19 15l-2.75 3.5h2.5L18 21.25l3-3.5h-2.5z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mwhs48gfm {
  width: 14.5px;
  height: 10px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="mwhs48gfm"/><path class="fpn4ubbrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:system-prompt"} {...others} />);
}

export default Component;
