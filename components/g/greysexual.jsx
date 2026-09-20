import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh7-72bhh.css';
import '../../css/x/x9oatwbkt.css';
import '../../css/d/d8kbcbc-x.css';
import '../../css/j/jj6pgz7hr.css';
import '../../css/a/azepj3bxo.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="eh7-72bhh"/><path class="x9oatwbkt"/><path class="d8kbcbc-x"/><path class="jj6pgz7hr"/><path class="azepj3bxo"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:greysexual"} {...others} />);
}

export default Component;
