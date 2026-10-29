import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flv7s8bgb.css';
import '../../css/z/zxijdobrf.css';
import '../../css/q/qtwpi-buu.css';
import '../../css/b/b6ef51bau.css';
import '../../css/v/vureej5dd.css';
import '../../css/w/w82atz9zt.css';
import '../../css/f/fiknicclu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="flv7s8bgb wm-k"/><path class="wm-k zxijdobrf"/><path class="qtwpi-buu wm-k"/><path class="b6ef51bau wm-a"/><path class="vureej5dd wm-a"/><path class="w82atz9zt wm-a"/><path class="fiknicclu wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:list-music"} {...others} />);
}

export default Component;
