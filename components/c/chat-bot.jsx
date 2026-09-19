import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qz4qdib_b.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/v/vo1c2hb_n.css';
import '../../css/v/vyei62k9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qz4qdib_b"/><path class="r4f-rbb3p"/><path class="vo1c2hb_n"/><path class="vyei62k9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-bot"} {...others} />);
}

export default Component;
