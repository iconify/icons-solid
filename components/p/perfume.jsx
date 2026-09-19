import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/j/j6rzfd3ha.css';
import '../../css/i/iy4m0gyoo.css';
import '../../css/s/svzg1bbpt.css';
import '../../css/x/xjynq7ute.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="j6rzfd3ha"/><path class="iy4m0gyoo"/><circle class="svzg1bbpt"/><path class="xjynq7ute"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:perfume"} {...others} />);
}

export default Component;
