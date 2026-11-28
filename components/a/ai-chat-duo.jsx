import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fer9jq_fe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jp1x-kbod.css';
import '../../css/l/lwuu7pbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fer9jq_fe secondary"/><g class="dt0cm9dhy primary"><path class="jp1x-kbod"/><path class="lwuu7pbfz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ai-chat-duo"} {...others} />);
}

export default Component;
