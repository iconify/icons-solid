import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yu_fd_b3j.css';
import '../../css/r/rami70jvc.css';
import '../../css/c/cwioucchd.css';
import '../../css/j/j-zik85gg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yu_fd_b3j"/><path class="rami70jvc"/><path class="cwioucchd"/><path class="j-zik85gg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-square-off-broken"} {...others} />);
}

export default Component;
