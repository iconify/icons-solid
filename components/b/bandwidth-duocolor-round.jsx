import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.knl92tmrp {
  stroke-opacity: 0.4;
  d: path("M6 12h12M9 9l-3 3l3 3m6-6l3 3l-3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xs6yp0hje {
  d: path("M3 5h18M3 19h18");
}
</style><g class="nrj6p8qat"><path class="knl92tmrp"/><path class="xs6yp0hje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bandwidth-duocolor-round"} {...others} />);
}

export default Component;
