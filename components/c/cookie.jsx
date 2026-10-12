import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4u4dnb0e.css';
import '../../css/q/qepoofbtt.css';
import '../../css/h/hidu6-gxo.css';
import '../../css/b/bhvkkbbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o4u4dnb0e"/><path class="qepoofbtt"/><path class="hidu6-gxo"/><path class="bhvkkbbcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cookie"} {...others} />);
}

export default Component;
