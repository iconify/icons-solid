import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9fb07b2a.css';
import '../../css/e/efmdt6itn.css';
import '../../css/i/imai4lbcd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="v9fb07b2a"/><path class="efmdt6itn"/><path clip-rule="evenodd" class="imai4lbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:email-attachment-document-flat"} {...others} />);
}

export default Component;
