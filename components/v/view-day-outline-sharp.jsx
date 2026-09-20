import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwl_lt3ia {
  fill: currentColor;
  d: path("M3 20v-2h18v2zm0-4V8h18v8zm2-2h14v-4H5zM3 6V4h18v2zm2 8v-4z");
}
</style><path class="cwl_lt3ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-day-outline-sharp"} {...others} />);
}

export default Component;
