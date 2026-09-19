import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm-nhl8rc.css';
import '../../css/x/xlja3acan.css';
import '../../css/n/np43tbbbg.css';
import '../../css/e/e-n1u_b2f.css';
import '../../css/g/gz9__31di.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wm-nhl8rc"/><circle class="xlja3acan"/><path class="np43tbbbg"/><circle class="e-n1u_b2f"/><path class="gz9__31di"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:webcam"} {...others} />);
}

export default Component;
