import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qy7_hlb2q.css';
import '../../css/o/owkq-n1ue.css';
import '../../css/i/ipva-ybxm.css';
import '../../css/t/t2zlwccha.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qy7_hlb2q wm-k"/><path class="owkq-n1ue wm-shadow"/><path class="ipva-ybxm wm-k"/><path class="t2zlwccha wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coffin-engrave"} {...others} />);
}

export default Component;
