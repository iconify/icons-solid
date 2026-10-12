import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.buu6odifq {
  d: path("M2 12L8 12M5 9L8 12L5 15M22 12L16 12M19 9L16 12L19 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xvhz59bpj {
  stroke-opacity: 0.4;
  d: path("M12 5L12 19");
}
</style><g class="nrj6p8qat"><path class="xvhz59bpj"/><path class="buu6odifq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:fold-horizontal-duotone"} {...others} />);
}

export default Component;
