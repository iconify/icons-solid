import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cql4d7ioj.css';
import '../../css/s/s95_oac6y.css';
import '../../css/o/o2_1jsbel.css';
import '../../css/k/kl1tskb-o.css';
import '../../css/x/xmw26lbcb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cql4d7ioj"/><path class="s95_oac6y wm-k"/><path class="o2_1jsbel wm-k"/><path class="kl1tskb-o wm-k"/><path class="wm-k xmw26lbcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-round-sketch"} {...others} />);
}

export default Component;
