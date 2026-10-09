import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tartq6ezv.css';
import '../../css/y/yksg3jbil.css';
import '../../css/i/isueqgbyv.css';
import '../../css/n/nhtp_9brk.css';
import '../../css/v/vmdt2g_2p.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tartq6ezv"/><path class="yksg3jbil"/><path class="isueqgbyv"/><path class="nhtp_9brk"/><path class="vmdt2g_2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bulldozer-48"} {...others} />);
}

export default Component;
