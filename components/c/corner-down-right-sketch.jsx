import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qz-wqrb_o.css';
import '../../css/b/bo8a-d58q.css';
import '../../css/o/ofugmqbjy.css';
import '../../css/l/l2g7ifo6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qz-wqrb_o wm-k"/><path class="bo8a-d58q wm-a"/><path class="ofugmqbjy wm-k"/><path class="l2g7ifo6y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-down-right-sketch"} {...others} />);
}

export default Component;
