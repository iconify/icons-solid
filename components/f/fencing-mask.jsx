import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/k/kja1csyru.css';
import '../../css/i/iccwmd-ii.css';
import '../../css/u/u4cf97b6d.css';
import '../../css/v/vl8xitbig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="kja1csyru"/><path class="iccwmd-ii"/><path class="u4cf97b6d"/><path class="vl8xitbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fencing-mask"} {...others} />);
}

export default Component;
