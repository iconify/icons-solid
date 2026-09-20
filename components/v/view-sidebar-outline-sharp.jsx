import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nf3zvub1c {
  fill: currentColor;
  d: path("M3 19V5h18v14zm13.692-9.652H20V6h-3.308zm0 4.304H20v-3.304h-3.308zM4 18h11.692V6H4zm12.692 0H20v-3.348h-3.308z");
}
</style><path class="nf3zvub1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-sidebar-outline-sharp"} {...others} />);
}

export default Component;
