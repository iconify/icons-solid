import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a00fgq46t {
  d: path("m13 7l-7 7l4 4l7-7m-5-5l6 6M8 16l-4 4m5-9l4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qbbfq9kyc {
  stroke-opacity: 0.4;
  d: path("m15 9l3-3m-2-2l4 4");
}
</style><g class="nrj6p8qat"><path class="qbbfq9kyc"/><path class="a00fgq46t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:syringe-duocolor-sharp"} {...others} />);
}

export default Component;
