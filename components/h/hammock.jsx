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

.nlfj-2b-b {
  d: path("M3 4v17M21 4v17M3 8l3 3c3 4.5 9 4.5 12 0l3-3");
}

.qrl6ul59e {
  d: path("M6 11c3 1.75 9 1.75 12 0");
}
</style><g class="hntgybcog"><path class="nlfj-2b-b"/><path class="qrl6ul59e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hammock"} {...others} />);
}

export default Component;
