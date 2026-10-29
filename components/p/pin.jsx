import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e9go7hbsg.css';
import '../../css/v/vaz59h5au.css';
import '../../css/q/q22873scb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e9go7hbsg wm-a"/><path class="vaz59h5au wm-k"/><path class="q22873scb wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pin"} {...others} />);
}

export default Component;
