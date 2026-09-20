import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y5lwbcc8e {
  fill: currentColor;
  d: path("M5 15.05v-6h14v6zM11 5V2h2v3zm7.7 2.8l-1.4-1.4l1.8-1.8L20.5 6zM11 22v-3h2v3zm8.1-2.5l-1.8-1.8l1.4-1.4l1.8 1.8zM5.3 7.8L3.5 6l1.4-1.4l1.8 1.8zm-.4 11.7l-1.4-1.4l1.8-1.8l1.4 1.4zM7 13.05h10v-2H7zm0 0v-2z");
}
</style><path class="y5lwbcc8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wb-iridescent-outline"} {...others} />);
}

export default Component;
