import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pru2_q5nl.css';
import '../../css/s/sa9s0_b8i.css';
import '../../css/h/hadk8cb9r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="pru2_q5nl"/><path class="sa9s0_b8i"/><path clip-rule="evenodd" class="hadk8cb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:inbox-content-flat"} {...others} />);
}

export default Component;
