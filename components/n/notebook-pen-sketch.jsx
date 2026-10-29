import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x-fwwxnnq.css';
import '../../css/n/nq1-nx3hy.css';
import '../../css/u/u4d7iubqc.css';
import '../../css/t/tyeudgo-p.css';
import '../../css/f/f_gnyccij.css';
import '../../css/o/ooa4bcz7c.css';
import '../../css/u/u28tryxkt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="x-fwwxnnq"/><path class="nq1-nx3hy wm-k"/><path class="u4d7iubqc wm-a"/><path class="tyeudgo-p wm-s"/><path class="f_gnyccij wm-k"/><path class="ooa4bcz7c wm-a"/><path class="u28tryxkt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:notebook-pen-sketch"} {...others} />);
}

export default Component;
