import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vk5-v2mcz.css';
import '../../css/y/yotmohbra.css';
import '../../css/n/nq38fhacn.css';
import '../../css/d/dmc8hyxgf.css';
import '../../css/p/p2tcxnblo.css';
import '../../css/y/yhp3xdbbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vk5-v2mcz wm-shadow"/><path class="wm-shadow yotmohbra"/><path class="nq38fhacn"/><path class="dmc8hyxgf"/><path class="p2tcxnblo"/><path class="yhp3xdbbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:layout-grid"} {...others} />);
}

export default Component;
