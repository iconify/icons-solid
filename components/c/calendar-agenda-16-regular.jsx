import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.wvjas_bht {
  fill: currentColor;
  d: path("M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm-7 1A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3zm6 7a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0-2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zm0-2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z");
}
</style><path class="wvjas_bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-agenda-16-regular"} {...others} />);
}

export default Component;
