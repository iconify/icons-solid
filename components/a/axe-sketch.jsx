import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cend-5brl.css';
import '../../css/x/xzsn8_b-l.css';
import '../../css/m/m-ibzdb4g.css';
import '../../css/x/x76bqtbvi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cend-5brl"/><path class="wm-k xzsn8_b-l"/><path class="m-ibzdb4g wm-k"/><path class="wm-a x76bqtbvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:axe-sketch"} {...others} />);
}

export default Component;
