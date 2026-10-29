import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tstyxkmej.css';
import '../../css/k/k3qcgxbnp.css';
import '../../css/i/iw07ocizs.css';
import '../../css/f/fmvl9jb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tstyxkmej wm-k"/><path class="k3qcgxbnp wm-shadow"/><path class="iw07ocizs wm-k"/><path class="fmvl9jb-y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:refrigerator-engrave"} {...others} />);
}

export default Component;
