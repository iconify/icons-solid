import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh7-72bhh.css';
import '../../css/i/icrq7lbxj.css';
import '../../css/o/opr3h4blh.css';
import '../../css/b/b_ge85bsm.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="eh7-72bhh"/><path class="icrq7lbxj"/><path class="opr3h4blh"/><path class="b_ge85bsm"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:asexual"} {...others} />);
}

export default Component;
