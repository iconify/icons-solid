import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc42tcp8f.css';
import '../../css/q/qol5o9b3i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xc42tcp8f"/><path class="qol5o9b3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-pie-slice-48"} {...others} />);
}

export default Component;
