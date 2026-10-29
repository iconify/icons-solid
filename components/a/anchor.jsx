import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnide0b8v.css';
import '../../css/d/dgnctcbtx.css';
import '../../css/x/xc0dnkbmf.css';
import '../../css/f/fmtd-vbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tnide0b8v wm-a"/><path class="dgnctcbtx wm-k"/><path class="wm-k xc0dnkbmf"/><path class="fmtd-vbvf wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:anchor"} {...others} />);
}

export default Component;
