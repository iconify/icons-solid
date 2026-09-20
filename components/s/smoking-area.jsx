import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dhrtn4gvs.css';
import '../../css/b/bae_vkb-h.css';
import '../../css/h/hr9306b4r.css';
import '../../css/m/mxrla6b4q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="dhrtn4gvs"/><path class="bae_vkb-h"/><path class="hr9306b4r"/><path class="mxrla6b4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:smoking-area"} {...others} />);
}

export default Component;
