import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8s-fbcud.css';
import '../../css/l/l684lsbnm.css';
import '../../css/d/dpav-jbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q8s-fbcud"/><path class="l684lsbnm"/><path class="dpav-jbxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-safety"} {...others} />);
}

export default Component;
