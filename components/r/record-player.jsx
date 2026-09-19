import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/azhej1d0k.css';
import '../../css/q/qhlububhx.css';
import '../../css/j/j8qx_nxnc.css';
import '../../css/b/bpz45z7pg.css';
import '../../css/t/tnyb7g49u.css';
import '../../css/s/stors8b0m.css';
import '../../css/p/pehg1bcwr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="azhej1d0k"/><path class="qhlububhx"/><circle class="j8qx_nxnc"/><circle class="bpz45z7pg"/><path class="tnyb7g49u"/><path class="stors8b0m"/><path class="pehg1bcwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:record-player"} {...others} />);
}

export default Component;
