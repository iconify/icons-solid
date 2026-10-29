import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bx0l82bry.css';
import '../../css/n/n309j7meg.css';
import '../../css/r/rejh43tdo.css';
import '../../css/l/li0zfzbko.css';
import '../../css/r/rlqszhb7k.css';
import '../../css/q/qoxrg0bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bx0l82bry wm-k"/><path class="n309j7meg wm-a"/><path class="rejh43tdo wm-s"/><path class="li0zfzbko wm-k"/><path class="rlqszhb7k wm-a"/><path class="qoxrg0bwi wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:monitor-off-sketch"} {...others} />);
}

export default Component;
