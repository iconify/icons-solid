import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z1pc_s_be.css';
import '../../css/v/v3mx8eb-y.css';
import '../../css/j/jgcfcbbxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z1pc_s_be"/><path class="v3mx8eb-y"/><path class="jgcfcbbxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bubble-chat-text-forward"} {...others} />);
}

export default Component;
