import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmanmnbrx.css';
import '../../css/h/h9fwh4byj.css';
import '../../css/i/imepx1ksj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dmanmnbrx"/><path class="h9fwh4byj"/><path class="imepx1ksj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bubble-chat-2"} {...others} />);
}

export default Component;
