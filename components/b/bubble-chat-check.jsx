import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgts9bcxv.css';
import '../../css/y/y102wmgfh.css';
import '../../css/l/lyzbmhl9s.css';
import '../../css/r/rbj225sao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zgts9bcxv"/><path class="y102wmgfh"/><path class="lyzbmhl9s"/><path class="rbj225sao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bubble-chat-check"} {...others} />);
}

export default Component;
