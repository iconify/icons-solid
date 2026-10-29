import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m1ipstgyu.css';
import '../../css/q/qkxhjdbov.css';
import '../../css/q/qihvvue2f.css';
import '../../css/q/q183izpwp.css';
import '../../css/t/t208bbbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="m1ipstgyu"/><path class="qkxhjdbov wm-k"/><path class="qihvvue2f wm-a"/><path class="q183izpwp wm-k"/><path class="t208bbbrz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trash-sketch"} {...others} />);
}

export default Component;
