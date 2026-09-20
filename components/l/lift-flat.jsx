import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ygre25b_k.css';
import '../../css/w/w6_cphcth.css';
import '../../css/h/hrs0vob_f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ygre25b_k"/><path clip-rule="evenodd" class="w6_cphcth"/><path class="hrs0vob_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:lift-flat"} {...others} />);
}

export default Component;
