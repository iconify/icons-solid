import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzi012b3j.css';
import '../../css/x/x76_jccik.css';
import '../../css/e/el-rg4l4n.css';
import '../../css/q/qnsc60bko.css';
import '../../css/e/eh7_8obrm.css';
import '../../css/a/aqma2jbdk.css';
import '../../css/d/d-u0j2bcn.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/c/ctumew-0n.css';
import '../../css/p/py__upw6q.css';
import '../../css/l/l2v4nzbfq.css';
import '../../css/l/l9ixgxbul.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fzi012b3j"/><path class="x76_jccik"/><path class="el-rg4l4n"/><path class="qnsc60bko"/><path class="eh7_8obrm"/><path class="aqma2jbdk"/><path class="d-u0j2bcn"/><g class="doj9dq_jg"><path class="ctumew-0n"/><path class="py__upw6q"/><path class="l2v4nzbfq"/><path class="l9ixgxbul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hotel"} {...others} />);
}

export default Component;
