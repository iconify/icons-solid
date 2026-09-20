import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kib19kboj {
  fill: currentColor;
  d: path("M4 20v-7h1v5.312L18.312 5H13V4h7v7h-1V5.689L5.689 19H11v1z");
}
</style><path class="kib19kboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:open-in-full-sharp"} {...others} />);
}

export default Component;
