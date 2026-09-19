import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx_r9o0op.css';
import '../../css/a/ae4mtoqyp.css';
import '../../css/i/ip10g9ibb.css';
import '../../css/m/mwno1qbpo.css';
import '../../css/f/fjmqsybfn.css';
import '../../css/x/xtetr8bdq.css';
import '../../css/t/tb68sp07u.css';
import '../../css/j/jd921msex.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bx_r9o0op"/><path class="ae4mtoqyp"/><path class="ip10g9ibb"/><path class="mwno1qbpo"/><path class="fjmqsybfn"/><path class="xtetr8bdq"/><path class="tb68sp07u"/><path class="jd921msex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:mercurial"} {...others} />);
}

export default Component;
