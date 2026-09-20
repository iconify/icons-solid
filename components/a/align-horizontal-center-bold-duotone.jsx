import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eagkf8bqk.css';
import '../../css/v/v59z2ccas.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/e/ezz1s8b2f.css';
import '../../css/d/dba7q3bhb.css';
import '../../css/z/zxds2l2_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eagkf8bqk"/><path class="v59z2ccas"/><g class="mc2zb0bvp"><path class="ezz1s8b2f"/><path class="dba7q3bhb"/><path class="zxds2l2_n"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizontal-center-bold-duotone"} {...others} />);
}

export default Component;
