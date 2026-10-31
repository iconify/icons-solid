import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/reshl9bws.css';
import '../../css/d/dtfbu57zw.css';
import '../../css/i/ibmmwlg8w.css';
import '../../css/o/ouw5kpbrn.css';
import '../../css/k/k5u3p5bnt.css';
import '../../css/v/v547tbb8o.css';
import '../../css/m/mxm_94tbu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="reshl9bws"/><path class="dtfbu57zw"/><path class="ibmmwlg8w wm-shine"/><path class="ouw5kpbrn wm-k"/><path class="k5u3p5bnt wm-a"/><path class="v547tbb8o"/><path class="mxm_94tbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shield-x"} {...others} />);
}

export default Component;
