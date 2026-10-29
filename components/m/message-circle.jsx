import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-ugn55mt.css';
import '../../css/h/hjufvobrv.css';
import '../../css/h/hmjxisbnw.css';
import '../../css/f/f4afasbio.css';
import '../../css/p/pquhobcwo.css';
import '../../css/u/umh2lsb-j.css';
import '../../css/d/d23_j3b8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-ugn55mt wm-shadow"/><path class="hjufvobrv wm-k"/><path class="hmjxisbnw wm-k"/><path class="f4afasbio wm-k"/><path class="pquhobcwo wm-k"/><path class="umh2lsb-j wm-k"/><path class="d23_j3b8n wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:message-circle"} {...others} />);
}

export default Component;
