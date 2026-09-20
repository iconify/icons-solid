import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.out532bxv {
  fill: currentColor;
  d: path("m16 15l3-3l-1.05-1.075l-1.2 1.2V9h-1.5v3.125l-1.2-1.2L13 12zM2 20V4h20v16zm3.5-5H7v-4.5h1v3h1.5v-3h1V15H12V9H5.5z");
}
</style><path class="out532bxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:markdown-sharp"} {...others} />);
}

export default Component;
