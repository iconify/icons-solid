import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mthupbbfs {
  fill: currentColor;
  d: path("m12 19l-6-6l1.4-1.4l4.6 4.575l4.6-4.575L18 13zm0-6L6 7l1.4-1.4l4.6 4.575L16.6 5.6L18 7z");
}
</style><path class="mthupbbfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:keyboard-double-arrow-down-sharp"} {...others} />);
}

export default Component;
