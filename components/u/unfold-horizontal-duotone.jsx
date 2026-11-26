import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b71kddbvq {
  d: path("M8 12L2 12M5 9L2 12L5 15M16 12L22 12M19 9L22 12L19 15");
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
</style><g class="nrj6p8qat"><path class="xvhz59bpj"/><path class="b71kddbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:unfold-horizontal-duotone"} {...others} />);
}

export default Component;
