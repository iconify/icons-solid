import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8xrq0a2p.css';
import '../../css/d/d-jaw6bew.css';
import '../../css/q/q3wy11brx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l8xrq0a2p"/><path class="d-jaw6bew"/><path class="q3wy11brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-archive-filled"} {...others} />);
}

export default Component;
