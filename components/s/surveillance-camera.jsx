import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/e/eci58wbwa.css';
import '../../css/s/sjhfzccza.css';
import '../../css/b/ba3c2-ybd.css';
import '../../css/e/ejah339eg.css';
import '../../css/v/vmgnrwmrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="eci58wbwa"/><path class="sjhfzccza"/><path class="ba3c2-ybd"/><path class="ejah339eg"/><path class="vmgnrwmrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:surveillance-camera"} {...others} />);
}

export default Component;
