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

.vnsh8mbto {
  stroke-opacity: 0.4;
  d: path("m4 9l16-4m-8 2v4m-2-7h.01M14 3h.01");
}

.xrxzus5az {
  d: path("M9 11h6a7.25 7.25 0 0 1 0 10H9a7.25 7.25 0 0 1 0-10m-2 5h10");
}
</style><g class="nrj6p8qat"><path class="vnsh8mbto"/><path class="xrxzus5az"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cable-car-duocolor-sharp"} {...others} />);
}

export default Component;
