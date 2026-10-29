import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e6gga2tnl.css';
import '../../css/l/lqaiclbym.css';
import '../../css/e/et01vibno.css';
import '../../css/a/ae3oqxhnu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="e6gga2tnl wm-s"/><path class="lqaiclbym wm-k"/><path class="et01vibno wm-a"/><path class="ae3oqxhnu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:remote-control-sketch"} {...others} />);
}

export default Component;
