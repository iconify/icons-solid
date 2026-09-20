import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tunrf6ble {
  fill: currentColor;
  d: path("M4 18.5v-5.154L9.846 12L4 10.654V5.5L19.423 12z");
}
</style><path class="tunrf6ble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:send"} {...others} />);
}

export default Component;
