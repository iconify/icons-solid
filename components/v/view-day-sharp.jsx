import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ky5zau9vn {
  fill: currentColor;
  d: path("M3 20v-2h18v2zm0-4V8h18v8zM3 6V4h18v2z");
}
</style><path class="ky5zau9vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-day-sharp"} {...others} />);
}

export default Component;
