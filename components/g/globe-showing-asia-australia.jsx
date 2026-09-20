import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz-_5oksg.css';
import '../../css/n/no7vk9bpc.css';
import '../../css/s/sb52f8dlw.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/usozxnbrm.css';
import '../../css/q/q72ijub7o.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="sz-_5oksg"/><path class="no7vk9bpc"/><path class="sb52f8dlw"/><g class="ij2x_72vy"><circle class="usozxnbrm"/><path class="q72ijub7o"/><circle class="usozxnbrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:globe-showing-asia-australia"} {...others} />);
}

export default Component;
