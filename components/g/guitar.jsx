import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wgyb1hv4a.css';
import '../../css/l/ljp5tloqm.css';
import '../../css/k/knf-w_g_n.css';
import '../../css/n/ngnxw66uw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wgyb1hv4a"/><path class="ljp5tloqm wm-shine"/><path class="knf-w_g_n wm-k"/><path class="ngnxw66uw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:guitar"} {...others} />);
}

export default Component;
