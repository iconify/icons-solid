import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/p6xriabeb.css';
import '../../css/j/jrx2rabbv.css';
import '../../css/h/hnzkvnc0r.css';
import '../../css/v/vgklx2dfs.css';
import '../../css/j/j4zcy2bsn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="p6xriabeb"/><path class="jrx2rabbv"/><path class="hnzkvnc0r"/><path class="vgklx2dfs"/><path class="j4zcy2bsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:up-and-down"} {...others} />);
}

export default Component;
