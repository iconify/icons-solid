import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qx09o2p9m {
  fill: currentColor;
  d: path("M4 20V4h2v16zm7 0v-4h2v4zm7 0V4h2v16zm-7-6v-4h2v4zm0-6V4h2v4z");
}
</style><path class="qx09o2p9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:road-sharp"} {...others} />);
}

export default Component;
