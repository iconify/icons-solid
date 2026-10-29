import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xx4xp0bvy.css';
import '../../css/l/lw8rkv8ia.css';
import '../../css/y/ypjg7hbpa.css';
import '../../css/t/tu5qhwb4p.css';
import '../../css/b/bqabc6niv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k xx4xp0bvy"/><path class="lw8rkv8ia wm-a"/><path class="wm-shadow ypjg7hbpa"/><path class="tu5qhwb4p wm-k"/><path class="bqabc6niv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:scissors-engrave"} {...others} />);
}

export default Component;
