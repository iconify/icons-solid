import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xn-prcc5q.css';
import '../../css/c/cbx-d8_6n.css';
import '../../css/u/upitkszhy.css';
import '../../css/e/e9u28uixg.css';
import '../../css/y/yhyyhpbld.css';
import '../../css/g/g5ip63bln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xn-prcc5q"/><path class="cbx-d8_6n"/><path class="upitkszhy"/><path class="e9u28uixg"/><path class="yhyyhpbld"/><circle class="g5ip63bln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:open-one"} {...others} />);
}

export default Component;
