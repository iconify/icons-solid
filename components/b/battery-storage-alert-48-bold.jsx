import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih35z4x5n.css';
import '../../css/l/l7s7xcc2s.css';
import '../../css/c/ckludqbvv.css';
import '../../css/e/e3y16ob3v.css';
import '../../css/y/ygtv74bcc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ih35z4x5n"/><path class="l7s7xcc2s"/><path class="ckludqbvv"/><path class="e3y16ob3v"/><path class="ygtv74bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-storage-alert-48-bold"} {...others} />);
}

export default Component;
