import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhdp9zdbd.css';
import '../../css/c/cdaqfmb_j.css';
import '../../css/w/wr218zadm.css';
import '../../css/o/osgt0cbxc.css';
import '../../css/z/zmbtsjtza.css';
import '../../css/f/fa0ma0brr.css';
import '../../css/n/nxu5p9b7l.css';
import '../../css/a/au7rztbpt.css';
import '../../css/v/v-b9uppsv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uhdp9zdbd"/><path class="cdaqfmb_j"/><path class="wr218zadm"/><path class="osgt0cbxc"/><path class="zmbtsjtza"/><path class="fa0ma0brr"/><path class="nxu5p9b7l"/><path class="au7rztbpt"/><path class="v-b9uppsv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:concert-microphone"} {...others} />);
}

export default Component;
