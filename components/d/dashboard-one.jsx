import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/wuwz6qbxs.css';
import '../../css/w/wybwwlvbx.css';
import '../../css/t/ti7-jyvcm.css';
import '../../css/c/cax71kx1e.css';
import '../../css/q/qu0o4bc9m.css';
import '../../css/w/w94elpezk.css';
import '../../css/u/uie99-6at.css';
import '../../css/k/kssx9yvtp.css';

const viewBox = {"width":49,"height":48};
const content = `<g class="rggfaqb6e"><path class="wuwz6qbxs"/><circle class="wybwwlvbx"/><path class="ti7-jyvcm"/><path class="cax71kx1e"/><path class="qu0o4bc9m"/><path class="w94elpezk"/><path class="uie99-6at"/><path class="kssx9yvtp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:dashboard-one"} {...others} />);
}

export default Component;
