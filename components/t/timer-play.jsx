import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3m_xbc-z.css';
import '../../css/h/hy-ik9szd.css';
import '../../css/o/ollo1vbxs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d3m_xbc-z"/><path class="hy-ik9szd"/><circle class="ollo1vbxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timer-play"} {...others} />);
}

export default Component;
