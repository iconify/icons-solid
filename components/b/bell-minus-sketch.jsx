import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mqa-_wbaf.css';
import '../../css/k/kj_qmbbtw.css';
import '../../css/r/rzv24ii1n.css';
import '../../css/p/p5os4ng7w.css';
import '../../css/t/tq812si9s.css';
import '../../css/n/n9ntmhbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mqa-_wbaf"/><path class="kj_qmbbtw wm-a"/><path class="rzv24ii1n wm-s"/><path class="p5os4ng7w wm-k"/><path class="tq812si9s wm-a"/><path class="n9ntmhbfy wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bell-minus-sketch"} {...others} />);
}

export default Component;
