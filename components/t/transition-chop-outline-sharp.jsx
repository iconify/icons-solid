import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iideafbvu {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1.815l12.185-3.212L14.119 6H4zm.817.815H20V6h-4.844l2.248 8.692zM4 6");
}
</style><path class="iideafbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:transition-chop-outline-sharp"} {...others} />);
}

export default Component;
