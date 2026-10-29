import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yofw3vbgf.css';
import '../../css/w/wczpxsbww.css';
import '../../css/z/zurq0abtp.css';
import '../../css/c/c2e_ol-8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k yofw3vbgf"/><path class="wczpxsbww wm-a"/><path class="zurq0abtp"/><path class="c2e_ol-8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:holly"} {...others} />);
}

export default Component;
