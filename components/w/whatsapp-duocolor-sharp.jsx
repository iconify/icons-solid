import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mxxmst8ee {
  stroke-opacity: 0.4;
  d: path("m3 21l1-5a8.944 8.944 0 1 1 4 4Z");
}

.naa3wj7kp {
  d: path("M11 9H9v1a5 5 0 0 0 5 5h1v-2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mxxmst8ee"/><path class="naa3wj7kp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:whatsapp-duocolor-sharp"} {...others} />);
}

export default Component;
