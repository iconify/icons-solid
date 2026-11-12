import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b14gb-b4p {
  stroke-opacity: 0.4;
  d: path("M3 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pckj867pf {
  d: path("M16 3v10m-4-8l8 6m-8 0l8-6");
}
</style><g class="nrj6p8qat"><path class="b14gb-b4p"/><path class="pckj867pf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:regex-duocolor-round"} {...others} />);
}

export default Component;
