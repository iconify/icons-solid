import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nbfzhjb6u {
  d: path("M9 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M8 3v2m8-2v2M4 9h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y4edlabra {
  stroke-opacity: 0.4;
  d: path("M11 17a5 5 0 1 0 10 0a5 5 0 0 0-10 0m5-2v2h2");
}
</style><g class="nrj6p8qat"><path class="y4edlabra"/><path class="nbfzhjb6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:calendar-clock-corner-duocolor"} {...others} />);
}

export default Component;
