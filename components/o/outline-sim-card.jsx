import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hk2p2ybqs {
  fill: currentColor;
  d: path("M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 2v16H6V8.83L10.83 4zM7 17h2v2H7zm8 0h2v2h-2zm-8-6h2v4H7zm4 4h2v4h-2zm0-4h2v2h-2zm4 0h2v4h-2z");
}
</style><path class="hk2p2ybqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-sim-card"} {...others} />);
}

export default Component;
