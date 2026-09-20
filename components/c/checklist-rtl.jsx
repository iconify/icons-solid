import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nefjy4b4y {
  fill: currentColor;
  d: path("m16.375 19l-3.55-3.55l1.4-1.4l2.125 2.125l4.25-4.25L22 13.35zm0-8l-3.55-3.55l1.4-1.4l2.125 2.125l4.25-4.25L22 5.35zM2 17v-2h9v2zm0-8V7h9v2z");
}
</style><path class="nefjy4b4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:checklist-rtl"} {...others} />);
}

export default Component;
