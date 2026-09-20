import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/n9_jv_ugp.css';
import '../../css/h/hnkf5ebrt.css';
import '../../css/z/zna1w6bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="n9_jv_ugp"/><path class="hnkf5ebrt"/><path class="zna1w6bmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:usb-drive-sharp-two-tone"} {...others} />);
}

export default Component;
