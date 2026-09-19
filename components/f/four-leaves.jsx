import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z6mn0ywia.css';
import '../../css/h/hfi0s0bnr.css';
import '../../css/i/ir5a6zyvi.css';
import '../../css/j/jhp24ub2h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="z6mn0ywia"/><path class="hfi0s0bnr"/><path class="ir5a6zyvi"/><path class="jhp24ub2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:four-leaves"} {...others} />);
}

export default Component;
