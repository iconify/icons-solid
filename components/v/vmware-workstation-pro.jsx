import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn0_nldrm.css';
import '../../css/m/mxu_p1jge.css';
import '../../css/p/p6xe6zmnr.css';
import '../../css/c/c0lvt3b5s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hn0_nldrm"/><path class="mxu_p1jge"/><path class="p6xe6zmnr"/><path class="c0lvt3b5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vmware-workstation-pro"} {...others} />);
}

export default Component;
