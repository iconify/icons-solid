import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6ivw5b2a {
  d: path("M11.25 3.5c-.5-1.25 1.25-1.5 1.5-.5M7.5 9l2 1l-2 1m9-2l-2 1l2 1");
}

.bz031_o7j {
  d: path("M3 12.5a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qbneyka0q {
  fill: currentColor;
  d: path("M9.75 16a2.25 2.5 0 1 0 4.5 0a2.25 2.5 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="bz031_o7j"/><path class="b6ivw5b2a"/><path class="qbneyka0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:colic"} {...others} />);
}

export default Component;
