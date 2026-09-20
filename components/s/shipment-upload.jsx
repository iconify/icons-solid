import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/ddkfpf1lh.css';
import '../../css/a/ap0ainbgu.css';
import '../../css/i/ijv8__1ap.css';
import '../../css/x/xq_wxfbsr.css';
import '../../css/f/f4c6obtqn.css';
import '../../css/f/fy7fq3vnw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ddkfpf1lh"/><path class="ap0ainbgu"/><path class="ijv8__1ap"/><path class="xq_wxfbsr"/><path class="f4c6obtqn"/><path class="fy7fq3vnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:shipment-upload"} {...others} />);
}

export default Component;
