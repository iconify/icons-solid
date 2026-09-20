import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ojy75ih5w {
  fill: currentColor;
  d: path("M6 11.5A5.5 5.5 0 0 1 11.5 6h25a5.5 5.5 0 0 1 5.5 5.5v25a5.5 5.5 0 0 1-5.5 5.5h-25A5.5 5.5 0 0 1 6 36.5zM11.5 9A2.5 2.5 0 0 0 9 11.5v25a2.5 2.5 0 0 0 2.5 2.5h25a2.5 2.5 0 0 0 2.5-2.5v-25A2.5 2.5 0 0 0 36.5 9z");
}
</style><path class="ojy75ih5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:maximize-48-filled"} {...others} />);
}

export default Component;
