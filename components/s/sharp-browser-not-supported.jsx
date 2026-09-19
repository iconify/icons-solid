import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.emlgycbqx {
  fill: currentColor;
  d: path("M19 6v10.5l2 2V4H6.5l2 2zM3.22 3.32L1.95 4.59L3 5.64V20h14.36l2.06 2.06l1.27-1.27zM15 18H5V7.64L15.36 18z");
}
</style><path class="emlgycbqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-browser-not-supported"} {...others} />);
}

export default Component;
