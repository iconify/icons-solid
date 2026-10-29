import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dokkydlwa.css';
import '../../css/p/pf8jp1bza.css';
import '../../css/k/kni8ltbwm.css';
import '../../css/n/nz6xrlb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="dokkydlwa"/><path class="pf8jp1bza wm-a"/><path class="kni8ltbwm wm-k"/><path class="nz6xrlb9f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:layout-template-sketch"} {...others} />);
}

export default Component;
