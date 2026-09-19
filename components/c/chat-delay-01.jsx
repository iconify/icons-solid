import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ugrlbnbrf.css';
import '../../css/q/qdt7c407j.css';
import '../../css/l/lsl9z7beq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ugrlbnbrf"/><path class="qdt7c407j"/><path class="lsl9z7beq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-delay-01"} {...others} />);
}

export default Component;
