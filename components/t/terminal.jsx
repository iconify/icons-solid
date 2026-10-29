import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/l/l7xkddbwv.css';
import '../../css/n/nng5iyb4r.css';
import '../../css/p/pu2vm5q5g.css';
import '../../css/s/sdtvogbfk.css';
import '../../css/f/f3irf6y9z.css';
import '../../css/j/jm2f1rbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="l7xkddbwv wm-shadow"/><path class="nng5iyb4r"/><path class="pu2vm5q5g"/><path class="sdtvogbfk"/><path class="f3irf6y9z wm-shine"/><path class="jm2f1rbcj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:terminal"} {...others} />);
}

export default Component;
