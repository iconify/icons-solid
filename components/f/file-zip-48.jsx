import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca_z99bhx.css';
import '../../css/c/ck6_3u-qm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ca_z99bhx"/><path class="ck6_3u-qm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-zip-48"} {...others} />);
}

export default Component;
