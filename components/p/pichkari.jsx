import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/deyy2rbnw.css';
import '../../css/p/p2zv2bcbk.css';
import '../../css/n/nfsgdsqjk.css';
import '../../css/g/g2sik5moa.css';
import '../../css/w/we4z7ebtz.css';
import '../../css/d/d_y20rb0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="deyy2rbnw"/><path class="p2zv2bcbk wm-shine"/><path class="nfsgdsqjk wm-k"/><path class="g2sik5moa wm-a"/><path class="we4z7ebtz wm-s"/><path class="d_y20rb0h wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pichkari"} {...others} />);
}

export default Component;
