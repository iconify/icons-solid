import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jd1z6xbjn.css';
import '../../css/v/vg3x0nbkd.css';
import '../../css/a/abasntp2y.css';
import '../../css/g/go3ojebxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jd1z6xbjn wm-k"/><path class="vg3x0nbkd wm-shadow"/><path class="abasntp2y wm-k"/><path class="go3ojebxo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sd-card-engrave"} {...others} />);
}

export default Component;
