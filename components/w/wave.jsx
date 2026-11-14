import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwatfms-c {
  d: path("M2.5 8.5c1.75-3.75 4.25-3.75 6 0s4.25 3.75 6 0s4.25-3.75 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ol5i9mbsv {
  d: path("M3.5 15.5c1.75-3.75 4.25-3.75 6 0s4.25 3.75 6 0s4.25-3.75 6 0");
}
</style><g class="hntgybcog"><path class="cwatfms-c"/><path class="ol5i9mbsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wave"} {...others} />);
}

export default Component;
