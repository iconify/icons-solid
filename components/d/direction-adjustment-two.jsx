import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dxs9mlbnx.css';
import '../../css/x/x1obzgi-q.css';
import '../../css/k/kyxqs86cs.css';
import '../../css/t/tcb1lfbls.css';
import '../../css/e/eorz1_brh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="dxs9mlbnx"/><path class="x1obzgi-q"/><path class="kyxqs86cs"/><path class="tcb1lfbls"/><circle class="eorz1_brh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:direction-adjustment-two"} {...others} />);
}

export default Component;
