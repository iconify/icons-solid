import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v4xg0tb8o.css';
import '../../css/q/ql7zt9ofm.css';
import '../../css/g/gfdmcpb1m.css';
import '../../css/k/kzxm2abij.css';
import '../../css/j/jzuxsw-pi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="v4xg0tb8o"/><path class="ql7zt9ofm"/><path class="gfdmcpb1m"/><path class="kzxm2abij"/><path class="jzuxsw-pi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:broken-link-2"} {...others} />);
}

export default Component;
