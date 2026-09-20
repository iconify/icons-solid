import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/cobnmoblu.css';
import '../../css/x/xg215c6-w.css';
import '../../css/c/ctuu02cyd.css';
import '../../css/r/r8o_n9bgn.css';
import '../../css/u/ult9n1bre.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="cobnmoblu"/><path clip-rule="evenodd" class="xg215c6-w"/><path clip-rule="evenodd" class="ctuu02cyd"/></g><path clip-rule="evenodd" class="r8o_n9bgn"/><path clip-rule="evenodd" class="ult9n1bre"/><path class="mo5netbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:bulletin-notice-off"} {...others} />);
}

export default Component;
