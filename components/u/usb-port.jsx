import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nrq690bwu.css';
import '../../css/j/jqrlyv50h.css';
import '../../css/i/i9xc1pbuc.css';
import '../../css/x/x--nit3bm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="nrq690bwu"/><path class="jqrlyv50h"/><path class="i9xc1pbuc"/><path class="x--nit3bm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:usb-port"} {...others} />);
}

export default Component;
