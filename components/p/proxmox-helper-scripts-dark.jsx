import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxpyyq7ha.css';
import '../../css/a/a76ci7s7o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xxpyyq7ha"/><path class="a76ci7s7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:proxmox-helper-scripts-dark"} {...others} />);
}

export default Component;
