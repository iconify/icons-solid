import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pi2eee_op.css';
import '../../css/y/y2w64wyfm.css';
import '../../css/a/aqfn421rq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="pi2eee_op"/><path class="wm-a y2w64wyfm"/><path class="aqfn421rq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hot-cocoa-solid"} {...others} />);
}

export default Component;
