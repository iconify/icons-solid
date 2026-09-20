import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7i38m_6u.css';
import '../../css/m/m_sph4bed.css';
import '../../css/y/y9m5zgczg.css';
import '../../css/c/cm5vxheyp.css';
import '../../css/d/d40p4u52t.css';
import '../../css/x/x7np1jbhm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p7i38m_6u"/><path clip-rule="evenodd" class="m_sph4bed"/><path class="y9m5zgczg"/><path class="cm5vxheyp"/><path class="d40p4u52t"/><path class="x7np1jbhm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ice-cream-3"} {...others} />);
}

export default Component;
