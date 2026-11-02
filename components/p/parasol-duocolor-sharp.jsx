import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a57wzobvd {
  stroke-opacity: 0.4;
  d: path("m12 13l4 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qhevnvmwo {
  d: path("M4 17a8.944 8.944 0 1 1 16-8Zm-1 4h18");
}
</style><g class="nrj6p8qat"><path class="a57wzobvd"/><path class="qhevnvmwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:parasol-duocolor-sharp"} {...others} />);
}

export default Component;
