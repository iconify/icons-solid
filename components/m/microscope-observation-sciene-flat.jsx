import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cblr8480p.css';
import '../../css/c/ccltmjb-w.css';
import '../../css/d/drfqso9ex.css';
import '../../css/t/trdammbet.css';
import '../../css/w/w0nqb2bxk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="cblr8480p"/><path clip-rule="evenodd" class="ccltmjb-w"/><path class="drfqso9ex"/><path class="trdammbet"/><path class="w0nqb2bxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:microscope-observation-sciene-flat"} {...others} />);
}

export default Component;
