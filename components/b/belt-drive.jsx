import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7-ijqb2t {
  d: path("m9.75 6.5l6.75 2a3.75 3.75 0 1 1 0 7l-6.75 2a5.75 5.75 0 1 1 0-11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nuyt2iyfm {
  d: path("M5.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m12.25 0h.01");
}
</style><g class="hntgybcog"><path class="c7-ijqb2t"/><path class="nuyt2iyfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:belt-drive"} {...others} />);
}

export default Component;
