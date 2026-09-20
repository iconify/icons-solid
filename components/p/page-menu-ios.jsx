import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxiqg8b_w {
  fill: currentColor;
  d: path("M3 21v-2h12v2zm0-4v-2h18v2zm2-4q-.825 0-1.412-.587T3 11V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v6q0 .825-.587 1.413T19 13z");
}
</style><path class="cxiqg8b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:page-menu-ios"} {...others} />);
}

export default Component;
