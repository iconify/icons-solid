import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/l/l8kxajbnw.css';
import '../../css/z/zy7qj5ior.css';
import '../../css/d/dqci3t_9u.css';
import '../../css/m/m_9qxcpob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="l8kxajbnw"/><path class="zy7qj5ior"/><path class="dqci3t_9u"/><path class="m_9qxcpob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chat-bubble-square-write"} {...others} />);
}

export default Component;
