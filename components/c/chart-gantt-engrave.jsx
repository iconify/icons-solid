import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w18srrtlx.css';
import '../../css/c/ctau3x_xj.css';
import '../../css/h/h10ay8v4y.css';
import '../../css/i/iqg85keyw.css';
import '../../css/k/k2jm9_qyv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="w18srrtlx wm-k"/><path class="ctau3x_xj wm-a"/><path class="h10ay8v4y wm-shadow"/><path class="iqg85keyw wm-k"/><path class="k2jm9_qyv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chart-gantt-engrave"} {...others} />);
}

export default Component;
