import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6i7a1b8w {
  stroke-opacity: 0.4;
  d: path("m18 15l3-3m0 0l-3-3m3 3H11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y6k8asb0k {
  d: path("M14 17v4H3V3h11v4");
}
</style><g class="nrj6p8qat"><path class="b6i7a1b8w"/><path class="y6k8asb0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:log-out-duocolor-sharp"} {...others} />);
}

export default Component;
