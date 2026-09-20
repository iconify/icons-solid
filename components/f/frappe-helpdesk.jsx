import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbmsbj1ug.css';
import '../../css/m/m0hpcl8zo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xbmsbj1ug"/><path class="m0hpcl8zo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:frappe-helpdesk"} {...others} />);
}

export default Component;
