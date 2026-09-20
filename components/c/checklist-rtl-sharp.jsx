import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0ga-wu0d {
  fill: currentColor;
  d: path("m16.106 17.904l-2.839-2.838l.689-.689l2.125 2.125l4.25-4.25l.688.714zm0-7.231l-2.839-2.838l.689-.689l2.125 2.125l4.25-4.25l.688.714zM3 16.116v-1h8v1zm0-7.231v-1h8v1z");
}
</style><path class="m0ga-wu0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:checklist-rtl-sharp"} {...others} />);
}

export default Component;
