import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a5ke_q-oc.css';
import '../../css/u/ufhyd-bxp.css';
import '../../css/x/xqnh1_l3i.css';
import '../../css/u/upgj87b_s.css';
import '../../css/c/cbieqc0sr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a5ke_q-oc wm-shadow"/><path class="ufhyd-bxp wm-shadow"/><path class="xqnh1_l3i"/><path class="upgj87b_s"/><path class="cbieqc0sr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:parking"} {...others} />);
}

export default Component;
