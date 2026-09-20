import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e0cmz0boh.css';
import '../../css/d/ddzidijwh.css';
import '../../css/w/w63pqzbel.css';
import '../../css/f/fzxfsm2kx.css';
import '../../css/u/uuxim2s9b.css';
import '../../css/q/qgm6ncb5m.css';
import '../../css/t/t4qaumccy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e0cmz0boh"/><path class="ddzidijwh"/><path class="w63pqzbel"/><path class="fzxfsm2kx"/><path class="uuxim2s9b"/><path class="qgm6ncb5m"/><path class="t4qaumccy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-figma-broken"} {...others} />);
}

export default Component;
