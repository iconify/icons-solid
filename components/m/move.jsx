import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vxzkcsb0e.css';
import '../../css/k/k9x2z2blo.css';
import '../../css/g/g5_d_5y8o.css';
import '../../css/w/w21ocjbww.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="vxzkcsb0e"/><path class="k9x2z2blo"/><path class="g5_d_5y8o"/><path class="w21ocjbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:move"} {...others} />);
}

export default Component;
