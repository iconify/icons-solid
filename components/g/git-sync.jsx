import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dgy70-f5n {
  d: path("M4 12a8 8 0 0 1 15-4m1 4a8 8 0 0 1-15 4");
}

.dpzuz5l8n {
  d: path("M19 3.5V8h-4.5M5 20.5V16h4.5m0-4a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dgy70-f5n"/><path class="dpzuz5l8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:git-sync"} {...others} />);
}

export default Component;
