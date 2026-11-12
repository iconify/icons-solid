import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bd69zj4mw {
  stroke-opacity: 0.4;
  d: path("m9 9l6 6");
}

.cnaz25bpn {
  d: path("m15 9l2 2a1.414 1.414 0 0 1 0 2l-3 3h-3l-4 4a1.414 1.414 0 0 1-2 0l-1-1a1.414 1.414 0 0 1 0-2l4-4v-3l3-3a1.414 1.414 0 0 1 2 0z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bd69zj4mw"/><path class="cnaz25bpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flashlight-off-duocolor"} {...others} />);
}

export default Component;
