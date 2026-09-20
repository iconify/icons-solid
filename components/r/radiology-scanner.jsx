import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4s4tnbvs.css';
import '../../css/j/j4mg3wbbl.css';
import '../../css/o/oipw_z13u.css';
import '../../css/b/bvb-xcbzn.css';
import '../../css/t/tppjbybei.css';
import '../../css/c/cfc2egqfb.css';
import '../../css/s/s8sn_lblw.css';
import '../../css/e/e-w7hrp9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d4s4tnbvs"/><path class="j4mg3wbbl"/><path class="oipw_z13u"/><path class="bvb-xcbzn"/><path class="tppjbybei"/><path class="cfc2egqfb"/><path class="s8sn_lblw"/><path class="e-w7hrp9w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:radiology-scanner"} {...others} />);
}

export default Component;
