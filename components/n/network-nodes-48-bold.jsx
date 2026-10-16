import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw7qwioap.css';
import '../../css/l/l3qc97r_z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yw7qwioap"/><path class="l3qc97r_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:network-nodes-48-bold"} {...others} />);
}

export default Component;
