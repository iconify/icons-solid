import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j59xwccww.css';
import '../../css/h/hmxnmsbhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j59xwccww"/><path class="hmxnmsbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-off-outline"} {...others} />);
}

export default Component;
