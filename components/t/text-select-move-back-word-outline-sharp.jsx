import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2cet-bmu {
  fill: currentColor;
  d: path("m7 16l-4-4l4-4l1.4 1.4L6.825 11H13v2H6.825L8.4 14.6zm10 3h2V5h-2zm-2 2V3h6v18zM11 5V3h2v2zm0 16v-2h2v2zM7 5V3h2v2zm0 16v-2h2v2zM3 5V3h2v2zm0 16v-2h2v2zm14-2h2z");
}
</style><path class="z2cet-bmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-select-move-back-word-outline-sharp"} {...others} />);
}

export default Component;
