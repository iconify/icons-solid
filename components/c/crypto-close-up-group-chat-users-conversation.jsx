import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x4riq3blc.css';
import '../../css/y/yj_5ymbss.css';
import '../../css/b/b_yy_rbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x4riq3blc"/><path class="yj_5ymbss"/><path class="b_yy_rbmc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:crypto-close-up-group-chat-users-conversation"} {...others} />);
}

export default Component;
