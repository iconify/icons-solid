import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf57_hl-a.css';
import '../../css/q/qrxusubxp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cf57_hl-a"/><path class="qrxusubxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:torch-48"} {...others} />);
}

export default Component;
