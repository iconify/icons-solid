import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/btpv9l0sb.css';
import '../../css/l/ly2o3vbnn.css';
import '../../css/e/e4nl4q55e.css';
import '../../css/m/mc4olacnm.css';
import '../../css/x/xmcnbbcza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="btpv9l0sb"/><path class="ly2o3vbnn wm-k"/><path class="e4nl4q55e wm-s"/><path class="mc4olacnm wm-k"/><path class="wm-s xmcnbbcza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-branch-plus-sketch"} {...others} />);
}

export default Component;
