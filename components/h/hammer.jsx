import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k_lo46bdk.css';
import '../../css/u/uyvh0hlos.css';
import '../../css/s/sfs__-7_f.css';
import '../../css/d/d1up9g-eu.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k_lo46bdk"/><path class="uyvh0hlos wm-shine"/><path class="sfs__-7_f wm-k"/><path class="d1up9g-eu wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:hammer"} {...others} />);
}

export default Component;
