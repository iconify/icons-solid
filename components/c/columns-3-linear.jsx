import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qioz3pgou.css';
import '../../css/b/bfsv7cc4c.css';
import '../../css/r/rma5_ql1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qioz3pgou"/><path class="bfsv7cc4c"/><path class="rma5_ql1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:columns-3-linear"} {...others} />);
}

export default Component;
