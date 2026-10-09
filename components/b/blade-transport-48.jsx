import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnizhvbij.css';
import '../../css/c/cbbk25b7d.css';
import '../../css/k/kwxtwsb-m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nnizhvbij"/><path class="cbbk25b7d"/><path class="kwxtwsb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:blade-transport-48"} {...others} />);
}

export default Component;
