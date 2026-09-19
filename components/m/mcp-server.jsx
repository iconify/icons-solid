import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y1qak0s9k.css';
import '../../css/n/nyvu_qmab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y1qak0s9k"/><path class="nyvu_qmab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mcp-server"} {...others} />);
}

export default Component;
