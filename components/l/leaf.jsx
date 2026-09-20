import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/b/bl0-m4qik.css';
import '../../css/x/xt0_ofxrb.css';
import '../../css/b/bz9pb62cn.css';
import '../../css/m/m43lmtb4v.css';
import '../../css/y/y2r05qasr.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="bl0-m4qik"/><path clip-rule="evenodd" class="xt0_ofxrb"/><path clip-rule="evenodd" class="bz9pb62cn"/></g><path clip-rule="evenodd" class="m43lmtb4v"/><path clip-rule="evenodd" class="y2r05qasr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:leaf"} {...others} />);
}

export default Component;
