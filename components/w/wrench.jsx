import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uesekybgi.css';
import '../../css/d/ddlon3bqu.css';
import '../../css/v/vnwlw3via.css';
import '../../css/v/vw_qznbjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="uesekybgi"/><path class="ddlon3bqu wm-shine"/><path class="vnwlw3via"/><path class="vw_qznbjv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wrench"} {...others} />);
}

export default Component;
