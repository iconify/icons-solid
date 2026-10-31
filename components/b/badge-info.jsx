import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d4gr4b-ew.css';
import '../../css/w/wpp_f3cfz.css';
import '../../css/d/d-ig5rb5w.css';
import '../../css/h/hooc3vbcx.css';
import '../../css/q/qh4e5fb4s.css';
import '../../css/x/xruwbnb4l.css';
import '../../css/z/zi1pj7wbn.css';
import '../../css/l/l-d46i7nz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d4gr4b-ew"/><path class="wpp_f3cfz"/><path class="d-ig5rb5w wm-shine"/><path class="hooc3vbcx wm-k"/><path class="qh4e5fb4s wm-a"/><path class="xruwbnb4l"/><path class="zi1pj7wbn"/><path class="l-d46i7nz wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:badge-info"} {...others} />);
}

export default Component;
