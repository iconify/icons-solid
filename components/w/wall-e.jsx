import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnkq6_2-y.css';
import '../../css/q/qte9xhb7o.css';
import '../../css/i/iiz1n_blg.css';
import '../../css/f/f_wibac9u.css';
import '../../css/h/hde33gl8o.css';
import '../../css/e/edma6w6lg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vnkq6_2-y"/><path class="qte9xhb7o"/><path class="iiz1n_blg"/><path class="f_wibac9u"/><path class="hde33gl8o"/><path class="edma6w6lg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:wall-e"} {...others} />);
}

export default Component;
