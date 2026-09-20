import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azo_6dgni {
  fill: currentColor;
  d: path("M2 7V3h20v4h-2V5H4v2zm6 14v-2H2v-4h2v2h16v-2h2v4h-6v2zM4.8 11l2.6-2.6L6 7l-4 4l4 4l1.4-1.4zm14.4 0l-2.6 2.6L18 15l4-4l-4-4l-1.4 1.4z");
}
</style><path class="azo_6dgni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:developer-mode-tv-outline-sharp"} {...others} />);
}

export default Component;
