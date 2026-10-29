import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n060wrb-o.css';
import '../../css/v/vexbc1b_g.css';
import '../../css/j/j6xpl_b5y.css';
import '../../css/b/bfklh_btr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n060wrb-o wm-k"/><path class="vexbc1b_g wm-a"/><path class="j6xpl_b5y wm-k"/><path class="bfklh_btr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:microscope-sketch"} {...others} />);
}

export default Component;
