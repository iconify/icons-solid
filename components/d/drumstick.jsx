import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/txyf44b7q.css';
import '../../css/g/g_axfdlrn.css';
import '../../css/p/pltr2wbgc.css';
import '../../css/r/re4ukw45c.css';
import '../../css/g/go6nlobpn.css';
import '../../css/t/txv7iwbrn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="txyf44b7q wm-shadow"/><path class="g_axfdlrn"/><path class="pltr2wbgc"/><path class="re4ukw45c"/><path class="go6nlobpn"/><path class="txv7iwbrn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:drumstick"} {...others} />);
}

export default Component;
