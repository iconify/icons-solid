import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nvl7h2b4x {
  fill: currentColor;
  d: path("M14 24v-2h5.175L12 14.825V20H6q-.825 0-1.412-.587T4 18V6.825L.7 3.5l1.4-1.4L22 22v2zm6.9-5.9l-1.4-1.425l1.1-1.1L22 17zM19 16.175l-2-2V13h2zM13.825 11L5.05 2.25q.225-.125.45-.187T6 2h7l6 6v3zM12 9h5l-5-5z");
}
</style><path class="nvl7h2b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:file-save-off"} {...others} />);
}

export default Component;
