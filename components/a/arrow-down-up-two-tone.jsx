import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a9g3-t9mx {
  stroke-opacity: 0.4;
  d: path("M17 21L17 3M13 7L17 3L21 7");
}

.bs657w5zt {
  d: path("M7 3L7 21M11 17L7 21L3 17");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a9g3-t9mx"/><path class="bs657w5zt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-down-up-two-tone"} {...others} />);
}

export default Component;
