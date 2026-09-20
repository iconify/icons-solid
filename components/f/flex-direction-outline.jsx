import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.my3cq462x {
  fill: currentColor;
  d: path("M2 20v-7h9v7zm0-9V4h9v7zm2-2h5V6H4zm14 11l-5-5l1.4-1.4l2.6 2.575V4h2v12.175l2.6-2.575L23 15z");
}
</style><path class="my3cq462x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:flex-direction-outline"} {...others} />);
}

export default Component;
