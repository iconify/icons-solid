import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fizeclbdz.css';
import '../../css/r/rc1nbbcet.css';
import '../../css/f/f0yb61qbz.css';
import '../../css/n/n2ypjvrce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fizeclbdz wm-k"/><path class="rc1nbbcet wm-a"/><path class="f0yb61qbz wm-k"/><path class="n2ypjvrce wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:signature-sketch"} {...others} />);
}

export default Component;
