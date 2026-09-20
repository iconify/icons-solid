import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pdezp8z3h {
  fill: currentColor;
  d: path("M5 21L3 7h3V3h12v4h3l-2 14zm1.725-2h10.55L18.7 9H5.3zm4.225-2l4.95-4.95l-1.425-1.4l-3.525 3.525l-1.425-1.425L8.1 14.175zM8 7h8V5H8zm4 7");
}
</style><path class="pdezp8z3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bucket-check-outline-sharp"} {...others} />);
}

export default Component;
