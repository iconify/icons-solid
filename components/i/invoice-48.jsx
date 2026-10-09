import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca_z99bhx.css';
import '../../css/w/wkx6n0o2a.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ca_z99bhx"/><path class="wkx6n0o2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:invoice-48"} {...others} />);
}

export default Component;
