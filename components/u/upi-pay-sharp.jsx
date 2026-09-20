import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u-a-u1b-i {
  fill: currentColor;
  d: path("M11 15h1.5v-2H16V9h-5zm6 0h1.5V9H17zm-4.5-3.5v-1h2v1zM5 15h5V9H8.5v4.5h-2V9H5zm-3 5V4h20v16z");
}
</style><path class="u-a-u1b-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:upi-pay-sharp"} {...others} />);
}

export default Component;
