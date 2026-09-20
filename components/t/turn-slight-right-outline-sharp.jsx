import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wx6bj0efx {
  fill: currentColor;
  d: path("M9 20v-8.4L14.6 6h-2.25V4H18v5.65h-2V7.4l-5 5V20z");
}
</style><path class="wx6bj0efx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:turn-slight-right-outline-sharp"} {...others} />);
}

export default Component;
