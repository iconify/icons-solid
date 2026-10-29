import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyctcrbct.css';
import '../../css/i/ijpwervyq.css';
import '../../css/r/rvcprhbgg.css';
import '../../css/i/i74ijkh7y.css';
import '../../css/f/fm35zvb8n.css';
import '../../css/w/wfwxak-hq.css';
import '../../css/d/dahc4vb2n.css';
import '../../css/z/z-1e0lbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pyctcrbct wm-a"/><path class="ijpwervyq wm-a"/><path class="rvcprhbgg wm-a"/><path class="i74ijkh7y wm-k"/><path class="fm35zvb8n wm-k"/><path class="wfwxak-hq wm-k"/><path class="dahc4vb2n wm-shine"/><path class="wm-k z-1e0lbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:carrot"} {...others} />);
}

export default Component;
