import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/ah34vx61k.css';
import '../../css/u/uxs6sac8y.css';
import '../../css/i/ielwengza.css';
import '../../css/z/zhtgx2bwa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ah34vx61k wm-k"/><path class="uxs6sac8y wm-k"/><path class="ielwengza wm-k"/><path class="wm-a zhtgx2bwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:network-sketch"} {...others} />);
}

export default Component;
