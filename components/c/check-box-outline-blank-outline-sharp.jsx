import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y1i_uabgk {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5z");
}
</style><path class="y1i_uabgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:check-box-outline-blank-outline-sharp"} {...others} />);
}

export default Component;
