import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tgy-vz67z.css';
import '../../css/m/mbscw100m.css';
import '../../css/a/ax0gll9bt.css';
import '../../css/h/hqgdyurmu.css';
import '../../css/q/qxdg7mx_s.css';
import '../../css/f/fdastpoll.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="tgy-vz67z"/><path class="mbscw100m"/><path class="ax0gll9bt"/><path class="hqgdyurmu"/><path class="qxdg7mx_s"/><path class="fdastpoll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-notification"} {...others} />);
}

export default Component;
