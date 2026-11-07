import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kswv2hrkj.css';
import '../../css/m/mqmycj9zd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kswv2hrkj"/><path class="mqmycj9zd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-off-bold-duotone"} {...others} />);
}

export default Component;
