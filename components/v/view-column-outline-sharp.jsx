import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mzv-ocbvo {
  fill: currentColor;
  d: path("M4.006 18V6H20v12zM5 17h3.998V7H5zm4.998 0h3.998V7H9.998zm4.998 0h3.998V7h-3.998z");
}
</style><path class="mzv-ocbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-column-outline-sharp"} {...others} />);
}

export default Component;
