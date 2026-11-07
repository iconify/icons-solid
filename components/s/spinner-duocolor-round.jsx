import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo69k3bvm {
  d: path("M21 12a9 9 0 0 1-18 0");
}

.iw-m9zbcy {
  stroke-opacity: 0.4;
  d: path("M3 12a9 9 0 0 1 9-9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="iw-m9zbcy"/><path class="bo69k3bvm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:spinner-duocolor-round"} {...others} />);
}

export default Component;
