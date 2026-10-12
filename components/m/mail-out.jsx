import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7vjzfbgj.css';
import '../../css/i/ib8qlq_kp.css';
import '../../css/j/j7m_j8-0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u7vjzfbgj"/><path class="ib8qlq_kp"/><path class="j7m_j8-0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-out"} {...others} />);
}

export default Component;
