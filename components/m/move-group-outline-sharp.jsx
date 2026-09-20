import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_0h8cbmq {
  fill: currentColor;
  d: path("M6 18v-4h2v2h12V6H8v2H6V2h16v16zm-4 4V6h2v14h14v2zm11-7l-1.4-1.4l1.575-1.6H6v-2h7.175L11.6 8.4L13 7l4 4z");
}
</style><path class="f_0h8cbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:move-group-outline-sharp"} {...others} />);
}

export default Component;
