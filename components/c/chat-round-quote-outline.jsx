import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j9gyou4rl.css';
import '../../css/s/sxgjd-btc.css';
import '../../css/d/dr1qdzm2w.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j9gyou4rl"/><path class="sxgjd-btc"/><path class="dr1qdzm2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-quote-outline"} {...others} />);
}

export default Component;
