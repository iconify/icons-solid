import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nw4q19_ui.css';
import '../../css/g/gkfk6p_mj.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/d/dqjnc-e1v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nw4q19_ui"/><path class="gkfk6p_mj"/><path class="si_mtzbvj"/><path class="dqjnc-e1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-broken"} {...others} />);
}

export default Component;
