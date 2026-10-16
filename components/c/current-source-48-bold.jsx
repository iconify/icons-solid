import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qe8f_eb4j.css';
import '../../css/v/vjtl3vm_z.css';
import '../../css/k/krkzo_l8s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qe8f_eb4j"/><path class="vjtl3vm_z"/><path class="krkzo_l8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:current-source-48-bold"} {...others} />);
}

export default Component;
