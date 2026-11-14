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

.ocvddkm9i {
  d: path("M8.5 18.5c0-4 3-7 7-7c0 4-3 7-7 7");
}

.slsd0y7tu {
  d: path("m4 8l1 12q.1 1.5 1.5 1.5h11q1.4 0 1.5-1.5l1-12Zm2.5 0c0-4.5 3.5-4.5 3.5 0m4 0c0-4.5 3.5-4.5 3.5 0");
}
</style><g class="hntgybcog"><path class="slsd0y7tu"/><path class="ocvddkm9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:garden-waste-sack"} {...others} />);
}

export default Component;
