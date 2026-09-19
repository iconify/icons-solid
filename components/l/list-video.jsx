import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/w-p_xv_8i.css';
import '../../css/m/mil_i2bdv.css';
import '../../css/p/p3_p_xvwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="w-p_xv_8i"/><path class="mil_i2bdv"/><path class="p3_p_xvwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:list-video"} {...others} />);
}

export default Component;
