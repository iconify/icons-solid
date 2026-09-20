import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mib44tblv {
  fill: currentColor;
  d: path("M12.212 17.077V8.269H3.48V3.077h14v6.27l3.038-3.04v7.54l-3.038-3.04v6.27zM9.827 19H4.606L2 16.4l.708-.746l1.273 1.273V11.25h.885v3.058h.769v-4.27h.884v4.27h.77v-3.654h.884v3.654h.77v-2.846h.884z");
}
</style><path class="mib44tblv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tamper-detection-on-sharp"} {...others} />);
}

export default Component;
