import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j2ijqibmd.css';
import '../../css/l/luidaefrd.css';
import '../../css/u/uyvt5vxeb.css';
import '../../css/m/mzfeuel6o.css';
import '../../css/r/r7jxdhzia.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j2ijqibmd"/><rect class="luidaefrd"/><path class="uyvt5vxeb"/><circle class="mzfeuel6o"/><path class="r7jxdhzia"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:dishwasher"} {...others} />);
}

export default Component;
