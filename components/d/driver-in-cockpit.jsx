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

.pkaa_7qgi {
  d: path("M8.25 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M3 16a3 3 0 1 0 6 0a3 3 0 1 0-6 0m12 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0m-3.25-9.5h2.5");
}

.t66qvzb0k {
  d: path("M2.5 13V9H6v1h8.5l7 1.5V13Z");
}
</style><g class="hntgybcog"><path class="t66qvzb0k"/><path class="pkaa_7qgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:driver-in-cockpit"} {...others} />);
}

export default Component;
