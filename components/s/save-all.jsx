import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oqlau_bqu.css';
import '../../css/e/eef_c2eec.css';
import '../../css/n/nmx5ar_td.css';
import '../../css/c/crrgdt2cw.css';
import '../../css/i/iyusuckmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oqlau_bqu wm-k"/><path class="eef_c2eec wm-a"/><path class="nmx5ar_td wm-k"/><path class="crrgdt2cw"/><path class="iyusuckmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:save-all"} {...others} />);
}

export default Component;
