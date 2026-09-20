import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wezuumbgr.css';
import '../../css/e/efmdt6itn.css';
import '../../css/e/ekjq26e4x.css';
import '../../css/k/kg-u87iqc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wezuumbgr"/><path class="efmdt6itn"/><path clip-rule="evenodd" class="ekjq26e4x"/><path clip-rule="evenodd" class="kg-u87iqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:file-check-alternate-flat"} {...others} />);
}

export default Component;
