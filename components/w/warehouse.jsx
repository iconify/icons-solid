import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ayx4uqb6m.css';
import '../../css/m/m_wfmdr5o.css';
import '../../css/h/h8zhcubnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ayx4uqb6m"/><path class="m_wfmdr5o"/><path class="h8zhcubnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warehouse"} {...others} />);
}

export default Component;
