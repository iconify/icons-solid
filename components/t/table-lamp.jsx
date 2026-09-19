import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lt3-vl_5z.css';
import '../../css/l/l_2b_ccut.css';
import '../../css/n/nnc-6wzuz.css';
import '../../css/a/aht3_6o9e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="lt3-vl_5z"/><path class="l_2b_ccut"/><path class="nnc-6wzuz"/><path class="aht3_6o9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:table-lamp"} {...others} />);
}

export default Component;
