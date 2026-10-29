import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/krl86btlo.css';
import '../../css/l/lbhtagbyq.css';
import '../../css/u/uewg3bcmw.css';
import '../../css/m/mmh2-406e.css';
import '../../css/u/u4plrgndh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="krl86btlo"/><path class="lbhtagbyq wm-k"/><path class="uewg3bcmw wm-a"/><path class="mmh2-406e wm-k"/><path class="u4plrgndh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:droplets-sketch"} {...others} />);
}

export default Component;
