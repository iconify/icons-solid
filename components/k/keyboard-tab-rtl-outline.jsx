import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.crc7ay_4i {
  fill: currentColor;
  d: path("M4 18H2V6h2zm8 0l-6-6l6-6l1.4 1.4L9.825 11H22v2H9.825l3.6 3.6z");
}
</style><path class="crc7ay_4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-tab-rtl-outline"} {...others} />);
}

export default Component;
