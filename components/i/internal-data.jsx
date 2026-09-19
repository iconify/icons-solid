import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/xn-prcc5q.css';
import '../../css/c/cmr0379ge.css';
import '../../css/g/gvbdpu-7k.css';
import '../../css/s/silhxrkbx.css';
import '../../css/y/yhyyhpbld.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="xn-prcc5q"/><path class="cmr0379ge"/><path class="gvbdpu-7k"/><path class="silhxrkbx"/><path class="yhyyhpbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:internal-data"} {...others} />);
}

export default Component;
