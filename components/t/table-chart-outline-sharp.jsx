import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v04t78brx {
  fill: currentColor;
  d: path("M4 20V4h16v16zM5 8.5h14V5H5zM5 19h2.885V9.5H5zm11.116 0H19V9.5h-2.884zm-7.231 0h6.23V9.5h-6.23z");
}
</style><path class="v04t78brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:table-chart-outline-sharp"} {...others} />);
}

export default Component;
