import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vj37yftef.css';
import '../../css/n/nj0v2mbkn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vj37yftef"/><path class="nj0v2mbkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-boat-48"} {...others} />);
}

export default Component;
