import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlb6dabuy.css';
import '../../css/m/m_ledbb3w.css';
import '../../css/m/m_goimbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mlb6dabuy"/><path class="m_ledbb3w"/><path clip-rule="evenodd" class="m_goimbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-warning-outline"} {...others} />);
}

export default Component;
