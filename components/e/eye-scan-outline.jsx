import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ifx-z_4bo.css';
import '../../css/m/ml_xzhfyr.css';
import '../../css/c/crupdvbxn.css';
import '../../css/f/f417znc2o.css';
import '../../css/l/llr1_k-0r.css';
import '../../css/l/ln3bmccij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ifx-z_4bo"/><path class="ml_xzhfyr"/><path class="crupdvbxn"/><path class="f417znc2o"/><path clip-rule="evenodd" class="llr1_k-0r"/><path clip-rule="evenodd" class="ln3bmccij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:eye-scan-outline"} {...others} />);
}

export default Component;
