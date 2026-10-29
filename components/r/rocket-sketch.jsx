import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/do4-6v2si.css';
import '../../css/p/pnc6h3v1b.css';
import '../../css/f/fx8h1r5he.css';
import '../../css/a/aklukkbda.css';
import '../../css/y/yi3y3cbzw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="do4-6v2si"/><path class="pnc6h3v1b wm-k"/><path class="fx8h1r5he wm-a"/><path class="aklukkbda wm-k"/><path class="wm-a yi3y3cbzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rocket-sketch"} {...others} />);
}

export default Component;
