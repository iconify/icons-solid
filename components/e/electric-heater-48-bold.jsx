import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/seho2dbyy.css';
import '../../css/w/wmbs3e3ue.css';
import '../../css/g/gikfybcho.css';
import '../../css/j/jc-p_wbxs.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="seho2dbyy"/><path class="wmbs3e3ue"/><path class="gikfybcho"/><path class="jc-p_wbxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-heater-48-bold"} {...others} />);
}

export default Component;
