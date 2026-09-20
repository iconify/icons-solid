import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f42wdzbpu {
  fill: currentColor;
  d: path("M3 21L21 3v4.23h-3.384V21zm17-3.23V9.615h1v8.153zm-.23 3.46v-1.46h1.46v1.46z");
}
</style><path class="f42wdzbpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:signal-cellular-connected-no-internet-4-bar-sharp"} {...others} />);
}

export default Component;
