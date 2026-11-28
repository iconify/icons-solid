import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cqdt6m_tq.css';
import '../../css/m/miaz_9bnj.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="cuyn6tgcc"><path class="cqdt6m_tq"/><path class="miaz_9bnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:sidebar-simple-bottom-duotone"} {...others} />);
}

export default Component;
