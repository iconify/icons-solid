import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/inftpnbxr.css';
import '../../css/w/wh1_e-bqz.css';
import '../../css/s/styllzb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="inftpnbxr"/><path class="wh1_e-bqz"/><path class="styllzb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:plugin-jigsaw-puzzle"} {...others} />);
}

export default Component;
