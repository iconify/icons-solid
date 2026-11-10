import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ps49u1bmu.css';
import '../../css/q/qta2w7b_n.css';
import '../../css/j/j7m_j8-0o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ps49u1bmu"/><path class="qta2w7b_n"/><path class="j7m_j8-0o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-out"} {...others} />);
}

export default Component;
