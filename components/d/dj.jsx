import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ni43jjnix.css';
import '../../css/e/e8ipl-x7v.css';
import '../../css/w/ww34jcb9r.css';
import '../../css/x/xlqxtpbnh.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="ni43jjnix"/><path class="e8ipl-x7v"/><path class="ww34jcb9r"/><path class="xlqxtpbnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:dj"} {...others} />);
}

export default Component;
