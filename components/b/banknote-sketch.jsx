import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nof7gjbxm.css';
import '../../css/y/yz3ko5bsq.css';
import '../../css/i/itk1anblx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nof7gjbxm"/><path class="wm-k yz3ko5bsq"/><path class="itk1anblx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:banknote-sketch"} {...others} />);
}

export default Component;
