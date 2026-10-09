import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eptwc2k3p.css';
import '../../css/s/sadekmbkj.css';
import '../../css/n/nfgmrlbfj.css';
import '../../css/m/m7-zbrb8b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eptwc2k3p"/><path class="sadekmbkj"/><path class="nfgmrlbfj"/><path class="m7-zbrb8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contactless-48-bold"} {...others} />);
}

export default Component;
