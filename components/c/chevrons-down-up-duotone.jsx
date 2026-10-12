import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2ni52jkt {
  stroke-opacity: 0.4;
  d: path("M7 4L12 9L17 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olicmnbwb {
  d: path("M7 20L12 15L17 20");
}
</style><g class="nrj6p8qat"><path class="d2ni52jkt"/><path class="olicmnbwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevrons-down-up-duotone"} {...others} />);
}

export default Component;
