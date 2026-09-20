import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nhwi2lbkc {
  fill: currentColor;
  d: path("M11.904 16.714L3.98 8.79l.708-.714l7.215 7.215l6.388-6.388H13v-1h7v7h-1V9.617z");
}
</style><path class="nhwi2lbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:call-missed-outgoing-outline-sharp"} {...others} />);
}

export default Component;
