import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.exkmwtb9n {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1.817-1H20V6h-4.844l2.248 8.692z");
}
</style><path class="exkmwtb9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:transition-chop-sharp"} {...others} />);
}

export default Component;
