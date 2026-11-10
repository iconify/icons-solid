import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysh0rlbce.css';
import '../../css/q/q1yxl1rgc.css';
import '../../css/m/m_aatt6fu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ysh0rlbce"/><path class="q1yxl1rgc"/><path class="m_aatt6fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-minus"} {...others} />);
}

export default Component;
