import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jha4hptgn.css';
import '../../css/u/uq6wzpn-b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jha4hptgn"/><path class="uq6wzpn-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:badge-alert-48"} {...others} />);
}

export default Component;
