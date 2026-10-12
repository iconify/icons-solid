import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyzm_vboa.css';
import '../../css/i/ikj4-qogc.css';
import '../../css/m/m_aatt6fu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hyzm_vboa"/><path class="ikj4-qogc"/><path class="m_aatt6fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-minus"} {...others} />);
}

export default Component;
