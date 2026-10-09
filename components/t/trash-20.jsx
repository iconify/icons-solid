import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9gz9fbhp.css';
import '../../css/p/p2k_2wbpy.css';
import '../../css/u/uy7atjbxq.css';
import '../../css/k/ksihj8sfd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h9gz9fbhp"/><path class="p2k_2wbpy"/><path class="uy7atjbxq"/><path class="ksihj8sfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trash-20"} {...others} />);
}

export default Component;
