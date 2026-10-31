import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ozeoptb9e.css';
import '../../css/k/k6gyaxbcs.css';
import '../../css/w/wiytz24fd.css';
import '../../css/r/r-nr70vpq.css';
import '../../css/j/jeu8tlbtr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ozeoptb9e"/><path class="k6gyaxbcs wm-shine"/><path class="wiytz24fd wm-k"/><path class="r-nr70vpq wm-a"/><path class="jeu8tlbtr wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:mandarin-orange"} {...others} />);
}

export default Component;
