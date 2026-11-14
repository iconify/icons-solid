import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0zuaxv7j {
  d: path("M10 13a3 3 0 1 1 2.75-2.25M4.25 10H2.5M6 6L4.75 4.75m5.25-.5V2.5M14 6l1.25-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rhypybpcz {
  d: path("M9.5 21h9a3 3 0 0 0 0-6a4.5 4.5 0 0 0-9 0a3 3 0 0 0 0 6");
}
</style><g class="hntgybcog"><path class="rhypybpcz"/><path class="b0zuaxv7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:sunlight-partial"} {...others} />);
}

export default Component;
