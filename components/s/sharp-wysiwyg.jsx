import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wgtloob5t {
  fill: currentColor;
  d: path("M17 12H7v-2h10zm-4 2H7v2h6zm8 7H3V3h18zM19 7H5v12h14z");
}
</style><path class="wgtloob5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-wysiwyg"} {...others} />);
}

export default Component;
