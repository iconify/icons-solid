import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y6mmsgbby {
  fill: currentColor;
  d: path("m18 21l4-4l-1.4-1.4l-1.6 1.6v-4.175h-2V17.2l-1.6-1.6L14 17zm-4 3v-2h8v2zM4 20V2h9l6 6v3.025h-2V9h-5V4H6v14h6v2zm2-2V4z");
}
</style><path class="y6mmsgbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:file-save-outline-sharp"} {...others} />);
}

export default Component;
