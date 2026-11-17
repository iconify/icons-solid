import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ns9_4pvvn {
  d: path("M3 3h18v4H3Zm4 4v4h10V7");
}

.q9mp-7b7p {
  stroke-opacity: 0.4;
  d: path("M9 15c1.5.75 1.5 2.25 0 3s-1.5 2.25 0 3m6-6c1.5.75 1.5 2.25 0 3s-1.5 2.25 0 3");
}
</style><g class="nrj6p8qat"><path class="q9mp-7b7p"/><path class="ns9_4pvvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:smoke-detector-duocolor-sharp"} {...others} />);
}

export default Component;
