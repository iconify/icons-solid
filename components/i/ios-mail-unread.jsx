import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jijxp98_q.css';
import '../../css/t/t8j_1ujbr.css';
import '../../css/c/cq1ipmmsh.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jijxp98_q"/><path class="t8j_1ujbr"/><path class="cq1ipmmsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-mail-unread"} {...others} />);
}

export default Component;
