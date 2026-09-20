import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qk299sb8w {
  fill: currentColor;
  d: path("m240.49 136.49l-32 32a12 12 0 0 1-17-17L203 140H53l11.52 11.51a12 12 0 0 1-17 17l-32-32a12 12 0 0 1 0-17l32-32a12 12 0 1 1 17 17L53 116h150l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17");
}
</style><path class="qk299sb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrows-horizontal-bold"} {...others} />);
}

export default Component;
