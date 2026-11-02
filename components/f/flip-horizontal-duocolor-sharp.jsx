import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ij17yhh5a {
  d: path("m3 7l5 5l-5 5zm9-2v2m0 4v2m0 4v2");
}

.ivq85pc-f {
  stroke-opacity: 0.4;
  d: path("m21 7l-5 5l5 5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ivq85pc-f"/><path class="ij17yhh5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flip-horizontal-duocolor-sharp"} {...others} />);
}

export default Component;
