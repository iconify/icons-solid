import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/ti149fj5l.css';
import '../../css/x/xnqlj98sb.css';
import '../../css/r/rftpgmx8c.css';
import '../../css/l/lktwn-bjm.css';
import '../../css/i/ik22gveqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ti149fj5l wm-k"/><path class="wm-a xnqlj98sb"/><path class="rftpgmx8c wm-shadow"/><path class="lktwn-bjm wm-k"/><path class="ik22gveqy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-output-engrave"} {...others} />);
}

export default Component;
