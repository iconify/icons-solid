import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ndnjf_k0h.css';
import '../../css/z/zqj3racsh.css';
import '../../css/m/mlmdecz3n.css';
import '../../css/t/t50buibtp.css';
import '../../css/d/dhvqt0w_z.css';
import '../../css/k/kbfv2gbfp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ndnjf_k0h"/><path class="zqj3racsh"/><path class="mlmdecz3n"/><path class="t50buibtp"/><path class="dhvqt0w_z"/><path class="kbfv2gbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:composition"} {...others} />);
}

export default Component;
