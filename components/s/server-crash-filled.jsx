import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_kar_p7d.css';
import '../../css/d/dr2vos38o.css';
import '../../css/p/p57dgccqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q_kar_p7d"/><path class="dr2vos38o"/><path clip-rule="evenodd" class="p57dgccqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:server-crash-filled"} {...others} />);
}

export default Component;
