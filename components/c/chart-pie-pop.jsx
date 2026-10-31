import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wucmcgbnn.css';
import '../../css/a/azudwkb6e.css';
import '../../css/u/up8j_gfbw.css';
import '../../css/w/w_tlpjb7a.css';
import '../../css/m/mdgb5dxrj.css';
import '../../css/g/gkjtlp-zp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="wucmcgbnn"/><path class="azudwkb6e"/><path class="up8j_gfbw"/><path clip-rule="evenodd" class="w_tlpjb7a"/><path class="mdgb5dxrj"/><path class="gkjtlp-zp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chart-pie-pop"} {...others} />);
}

export default Component;
