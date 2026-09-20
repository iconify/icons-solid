import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.g_knrvabm {
  fill: currentColor;
  d: path("M5.5 1A2.5 2.5 0 0 0 3 3.5v9A2.5 2.5 0 0 0 5.5 15h5a2.5 2.5 0 0 0 2.5-2.5V5.328a2.5 2.5 0 0 0-.732-1.767l-1.829-1.829A2.5 2.5 0 0 0 8.672 1zm1 7H8v5H6.5A1.5 1.5 0 0 1 5 11.5v-2A1.5 1.5 0 0 1 6.5 8M9 8h.5A1.5 1.5 0 0 1 11 9.5v2A1.5 1.5 0 0 1 9.5 13H9z");
}
</style><path class="g_knrvabm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:sim-16-filled"} {...others} />);
}

export default Component;
