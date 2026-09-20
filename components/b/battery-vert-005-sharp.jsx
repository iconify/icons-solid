import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ugfs2wb9x {
  fill: currentColor;
  d: path("M9 19h6V6H9v13Zm-2 3V4h3V2h4v2h3v18H7Z");
}
</style><path class="ugfs2wb9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-vert-005-sharp"} {...others} />);
}

export default Component;
