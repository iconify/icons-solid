import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d8r4hrbsu {
  d: path("m12.915 9.204l1.489 1.145a1.5 1.5 0 0 1 .508 1.664l-.57 1.711a1.5 1.5 0 0 1-1.423 1.026h-1.838a1.5 1.5 0 0 1-1.423-1.026l-.57-1.711a1.5 1.5 0 0 1 .508-1.664l1.489-1.145a1.5 1.5 0 0 1 1.83 0M12 8.5V3m3.25 8l5.25-1.75m-6.5 5.5l3.25 4.5M10 14.75l-3.25 4.5m2-8.25L3.5 9.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="d8r4hrbsu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:nanostructure"} {...others} />);
}

export default Component;
