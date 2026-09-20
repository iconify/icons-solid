import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ylwl-cjye {
  fill: currentColor;
  d: path("m18 20.5l-4-4l4-4l1.4 1.4l-1.575 1.6H22v2h-4.175l1.575 1.6zM2 20v-7h10v7zm2-2h6v-3H4zm2-6.5l-1.4-1.4l1.575-1.6H2v-2h4.175L4.6 4.9L6 3.5l4 4zm6-.5V4h10v7zm2-2h6V6h-6zm-4 9v-3zm4-9V6z");
}
</style><path class="ylwl-cjye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:modeling-outline-sharp"} {...others} />);
}

export default Component;
