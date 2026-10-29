import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qjmpe7bid.css';
import '../../css/b/bqshieblu.css';
import '../../css/p/ps4pgr5fz.css';
import '../../css/l/lyqjd8esz.css';
import '../../css/c/cjnnpprvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qjmpe7bid"/><path class="bqshieblu wm-k"/><path class="ps4pgr5fz wm-a"/><path class="lyqjd8esz wm-k"/><path class="cjnnpprvw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:thandai-sketch"} {...others} />);
}

export default Component;
