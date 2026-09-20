import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/m/mev3yvbte.css';
import '../../css/k/k3ne98vfh.css';
import '../../css/a/ayameacfw.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(4 1)" class="jtowsomii"><path class="mev3yvbte"/><path class="k3ne98vfh"/><circle class="ayameacfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:rocket"} {...others} />);
}

export default Component;
