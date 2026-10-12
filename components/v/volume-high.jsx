import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3x592b_i.css';
import '../../css/p/p9b4vhmdm.css';
import '../../css/g/gss-z3gge.css';
import '../../css/q/qws7ylbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b3x592b_i"/><path class="p9b4vhmdm"/><path class="gss-z3gge"/><path class="qws7ylbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:volume-high"} {...others} />);
}

export default Component;
