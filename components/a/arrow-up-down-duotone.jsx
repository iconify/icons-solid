import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-sv1wbyp {
  d: path("M7 21L7 3M3 7L7 3L11 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vrem0jbde {
  stroke-opacity: 0.4;
  d: path("M17 3L17 21M21 17L17 21L13 17");
}
</style><g class="nrj6p8qat"><path class="vrem0jbde"/><path class="f-sv1wbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-up-down-duotone"} {...others} />);
}

export default Component;
