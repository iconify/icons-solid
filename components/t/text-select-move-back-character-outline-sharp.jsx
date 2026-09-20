import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iv186187o {
  fill: currentColor;
  d: path("M11 5V3h2v2zm0 16v-2h2v2zM7 5V3h2v2zm0 16v-2h2v2zM3 5V3h2v2zm0 16v-2h2v2zm12 0v-2h2V5h-2V3h6v2h-2v14h2v2zm-8-5l-4-4l4-4l1.4 1.4L6.825 11H14v2H6.825L8.4 14.6z");
}
</style><path class="iv186187o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-select-move-back-character-outline-sharp"} {...others} />);
}

export default Component;
