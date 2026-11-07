import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lucugkbpw.css';
import '../../css/d/dvhsvcb-v.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/ezz1s8b2f.css';
import '../../css/d/dba7q3bhb.css';
import '../../css/z/zxds2l2_n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lucugkbpw"/><path class="dvhsvcb-v"/><g class="xtpeb-edw"><path class="ezz1s8b2f"/><path class="dba7q3bhb"/><path class="zxds2l2_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-horizontal-center-bold-duotone"} {...others} />);
}

export default Component;
