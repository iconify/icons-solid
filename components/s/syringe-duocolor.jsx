import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
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

.zkvxhjl_n {
  d: path("m13 7l-6 6a1.414 1.414 0 0 0 0 2l2 2a1.414 1.414 0 0 0 2 0l6-6m-5-5l6 6M8 16l-4 4m5-9l4 4");
}
</style><g class="nrj6p8qat"><path class="qbbfq9kyc"/><path class="zkvxhjl_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:syringe-duocolor"} {...others} />);
}

export default Component;
