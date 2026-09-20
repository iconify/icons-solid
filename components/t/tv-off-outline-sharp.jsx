import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yujwcfb3t {
  fill: currentColor;
  d: path("M20.767 17.167L20 16.42V5H8.6l-1-1H21v13.167zM4.81 4.041L5.77 5H4v12h12.342L2.162 2.808l.707-.708l18.685 18.685l-.708.707L17.316 18H15v2H9v-2H3V4.04zm9.819 6.969");
}
</style><path class="yujwcfb3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tv-off-outline-sharp"} {...others} />);
}

export default Component;
