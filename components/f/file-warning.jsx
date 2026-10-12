import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxmlv4suc.css';
import '../../css/t/t8gf8q6tr.css';
import '../../css/h/hqzbl-b2s.css';
import '../../css/l/lpka66bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mxmlv4suc"/><path class="t8gf8q6tr"/><path class="hqzbl-b2s"/><path class="lpka66bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-warning"} {...others} />);
}

export default Component;
