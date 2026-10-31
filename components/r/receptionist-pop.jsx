import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/h/h88n9zdal.css';
import '../../css/f/f6tc6sndo.css';
import '../../css/g/g8dm1rsab.css';
import '../../css/t/trjtvrbpz.css';
import '../../css/f/f7729vtdm.css';
import '../../css/h/h6eycxwop.css';
import '../../css/f/fce59j7hb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="h88n9zdal"/><path class="f6tc6sndo"/><path class="g8dm1rsab"/><path class="trjtvrbpz"/><path class="f7729vtdm"/><path class="h6eycxwop"/><path class="fce59j7hb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:receptionist-pop"} {...others} />);
}

export default Component;
