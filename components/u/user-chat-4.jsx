import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngjd1tbqn.css';
import '../../css/m/my3l08mbp.css';
import '../../css/a/afpi-0bwj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ngjd1tbqn"/><path class="my3l08mbp"/><path class="afpi-0bwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:user-chat-4"} {...others} />);
}

export default Component;
