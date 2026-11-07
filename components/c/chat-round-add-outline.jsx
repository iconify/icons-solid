import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sam5gk0fm.css';
import '../../css/x/x9024bb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sam5gk0fm"/><path clip-rule="evenodd" class="x9024bb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-add-outline"} {...others} />);
}

export default Component;
