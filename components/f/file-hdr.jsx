import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jlzx3bb9r.css';
import '../../css/m/m3ibmtbcq.css';
import '../../css/q/qobfjoi4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jlzx3bb9r"/><path class="m3ibmtbcq"/><path class="qobfjoi4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-hdr"} {...others} />);
}

export default Component;
