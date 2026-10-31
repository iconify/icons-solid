import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/co62ijjon.css';
import '../../css/d/dnp_svgjq.css';
import '../../css/t/t4qutl4xg.css';
import '../../css/a/a3_babb8c.css';
import '../../css/s/sle3e8_go.css';
import '../../css/x/xhemcq5ci.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="co62ijjon"/><path class="dnp_svgjq"/><path class="t4qutl4xg"/><path class="a3_babb8c"/><path class="sle3e8_go"/><path class="xhemcq5ci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:apartment-2-pop"} {...others} />);
}

export default Component;
