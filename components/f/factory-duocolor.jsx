import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jw8scnbdr {
  stroke-opacity: 0.4;
  d: path("M8 16h.01M12 16h.01M16 16h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pb4s0mydj {
  d: path("M3 21h18M5 21V5a2 2 0 1 1 4 0v7l5-3v3l5-3v12");
}
</style><g class="nrj6p8qat"><path class="jw8scnbdr"/><path class="pb4s0mydj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:factory-duocolor"} {...others} />);
}

export default Component;
