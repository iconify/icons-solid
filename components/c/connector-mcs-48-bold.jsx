import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qiod-8bbi.css';
import '../../css/k/kq1tsebcp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qiod-8bbi"/><path class="kq1tsebcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:connector-mcs-48-bold"} {...others} />);
}

export default Component;
