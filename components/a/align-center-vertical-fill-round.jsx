import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lpg1m5ble {
  fill: currentColor;
  d: path("M11 7v2H3V7a4 4 0 0 1 8 0m10 2h-8a4 4 0 0 1 8 0M3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 4h8v2a4 4 0 0 1-8 0Zm10 0h8a4 4 0 0 1-8 0");
}
</style><path class="lpg1m5ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-center-vertical-fill-round"} {...others} />);
}

export default Component;
