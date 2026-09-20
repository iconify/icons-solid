import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sxk4xobta {
  fill: currentColor;
  d: path("M7.289 15.289L4 12l3.289-3.288l.707.688l-2.075 2.1H13v1H5.921l2.075 2.1zM15.077 20V4H20v16zM11.385 5.23V4h1.23v1.23zm0 14.77v-1.23h1.23V20zM7.692 5.23V4h1.231v1.23zm0 14.77v-1.23h1.231V20zM4 5.23V4h1.23v1.23zM4 20v-1.23h1.23V20z");
}
</style><path class="sxk4xobta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:text-select-move-back-word-sharp"} {...others} />);
}

export default Component;
