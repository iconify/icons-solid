import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ju2p7768e {
  fill: currentColor;
  d: path("m7.4 20.702l-.708-.708L12 14.687l5.308 5.307l-.708.708l-4.6-4.594zm0-6l-.708-.708L12 8.687l5.308 5.307l-.708.708l-4.6-4.594zm0-6l-.708-.708L12 2.687l5.308 5.307l-.708.708L12 4.108z");
}
</style><path class="ju2p7768e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stat-3-sharp"} {...others} />);
}

export default Component;
