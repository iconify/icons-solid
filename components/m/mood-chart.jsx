import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aq8k4hbgm {
  d: path("M3.5 3v17.5h8.4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.leea_jbtv {
  d: path("M6.5 14L10 8.5l3 2.5l6-6.5M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.wxxp9korf {
  d: path("M16.5 19q1.5 1.5 3 0m-2.75-2h.01m2.49 0h.01");
}
</style><g class="hntgybcog"><path class="aq8k4hbgm"/><path class="leea_jbtv"/><path class="wxxp9korf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mood-chart"} {...others} />);
}

export default Component;
