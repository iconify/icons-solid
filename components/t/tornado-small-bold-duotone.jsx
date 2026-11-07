import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xn1ws9izf.css';
import '../../css/h/hd0g4bprt.css';
import '../../css/w/wp-m07q5u.css';
import '../../css/k/ksu-vpaob.css';
import '../../css/w/w3u7-asfg.css';
import '../../css/y/ygq6gxfeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="xn1ws9izf"/><path class="hd0g4bprt"/></g><path class="wp-m07q5u"/><path clip-rule="evenodd" class="ksu-vpaob"/><path class="w3u7-asfg"/><path class="ygq6gxfeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tornado-small-bold-duotone"} {...others} />);
}

export default Component;
