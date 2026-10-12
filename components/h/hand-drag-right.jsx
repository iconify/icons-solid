import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erv8lsb7t.css';
import '../../css/y/yjzzdacgp.css';
import '../../css/l/lwt_iac-p.css';
import '../../css/k/kdfjbbcou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="erv8lsb7t"/><path class="yjzzdacgp"/><path class="lwt_iac-p"/><path class="kdfjbbcou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-drag-right"} {...others} />);
}

export default Component;
