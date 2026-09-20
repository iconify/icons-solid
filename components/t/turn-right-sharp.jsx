import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n94neebvb {
  fill: currentColor;
  d: path("M7 20V9h10.2l-1.6-1.6L17 6l4 4l-4 4l-1.4-1.4l1.6-1.6H9v9z");
}
</style><path class="n94neebvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:turn-right-sharp"} {...others} />);
}

export default Component;
