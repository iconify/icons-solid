import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j0rwxebhi.css';
import '../../css/j/j82qxgumu.css';
import '../../css/u/uz0urmb1q.css';
import '../../css/l/l18sn5bpe.css';
import '../../css/m/mt59nwaad.css';
import '../../css/n/nqqwdgmgl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j0rwxebhi"/><path class="j82qxgumu"/><path class="uz0urmb1q"/><path class="l18sn5bpe"/><path class="mt59nwaad"/><path class="nqqwdgmgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:free-trial"} {...others} />);
}

export default Component;
