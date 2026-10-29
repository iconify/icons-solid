import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/ymh36zb9w.css';
import '../../css/a/aeo__2bgr.css';
import '../../css/j/ji2uddb1b.css';
import '../../css/g/gkf7pdbgi.css';
import '../../css/v/v335rzk7y.css';
import '../../css/a/aaskxzbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k ymh36zb9w"/><path class="aeo__2bgr wm-a"/><path class="ji2uddb1b wm-shadow"/><path class="gkf7pdbgi wm-a"/><path class="v335rzk7y wm-k"/><path class="aaskxzbtv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wind-engrave"} {...others} />);
}

export default Component;
