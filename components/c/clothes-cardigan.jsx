import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/w/w03k3lx1a.css';
import '../../css/v/vxglll9ye.css';
import '../../css/c/cg_rivb6f.css';
import '../../css/o/o9p5qc71t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="w03k3lx1a"/><path class="vxglll9ye"/><path class="cg_rivb6f"/><path class="o9p5qc71t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:clothes-cardigan"} {...others} />);
}

export default Component;
