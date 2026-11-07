import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eg1m8dbiy {
  d: path("M5 7H3v14h18V7h-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qeb65ksoh {
  stroke-opacity: 0.4;
  d: path("m9 12l3 3l3-3m-3 3V3");
}
</style><g class="nrj6p8qat"><path class="qeb65ksoh"/><path class="eg1m8dbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:import-duocolor-sharp"} {...others} />);
}

export default Component;
