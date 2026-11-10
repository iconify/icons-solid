import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/am3xqac2w.css';
import '../../css/m/muauw4btn.css';
import '../../css/y/y5oedsunc.css';
import '../../css/j/jhcnqwaay.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="am3xqac2w"/><path class="muauw4btn"/><path class="y5oedsunc"/><path class="jhcnqwaay"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pencil-paper"} {...others} />);
}

export default Component;
