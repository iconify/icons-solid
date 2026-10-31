import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ocnwhlbir.css';
import '../../css/l/lbkgi-gfg.css';
import '../../css/e/epbdlfuao.css';
import '../../css/u/uqob2etnq.css';
import '../../css/p/pw2dfcp2j.css';
import '../../css/i/iig5z_q6q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ocnwhlbir"/><path class="lbkgi-gfg"/><path class="epbdlfuao"/><path class="uqob2etnq"/><path class="pw2dfcp2j"/><path class="iig5z_q6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:upload-cloud-computer-pop"} {...others} />);
}

export default Component;
