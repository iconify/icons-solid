import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bqphnvzqd.css';
import '../../css/w/w3f2bfw-w.css';
import '../../css/b/bwmm-dbfo.css';
import '../../css/t/tsfppkblp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bqphnvzqd"/><path class="w3f2bfw-w wm-a"/><path class="bwmm-dbfo wm-k"/><path class="tsfppkblp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mouse-sketch"} {...others} />);
}

export default Component;
