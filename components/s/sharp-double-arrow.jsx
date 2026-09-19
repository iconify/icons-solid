import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6i3--k-y {
  fill: currentColor;
  d: path("M8.5 5H4l5 7l-5 7h4.5l5-7z");
}

.yw6235bcd {
  fill: currentColor;
  d: path("M15.5 5H11l5 7l-5 7h4.5l5-7z");
}
</style><path class="yw6235bcd"/><path class="h6i3--k-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-double-arrow"} {...others} />);
}

export default Component;
