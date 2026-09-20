import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rrnwx6buh.css';
import '../../css/p/pr3cdbb2n.css';
import '../../css/e/eq3frqb0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rrnwx6buh"/><path class="pr3cdbb2n"/><path class="eq3frqb0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-line-linear"} {...others} />);
}

export default Component;
