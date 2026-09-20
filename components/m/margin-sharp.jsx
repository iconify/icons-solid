import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r15zbbb0j {
  fill: currentColor;
  d: path("M4 20V4h16v16zM7.346 8.904h1.538V7.365H7.346zm3.885 0h1.538V7.365h-1.538zm3.885 0h1.538V7.365h-1.538zm-7.77 3.865h1.539v-1.538H7.346zm3.885 0h1.538v-1.538h-1.538zm3.885 0h1.538v-1.538h-1.538z");
}
</style><path class="r15zbbb0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:margin-sharp"} {...others} />);
}

export default Component;
