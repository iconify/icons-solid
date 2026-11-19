import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzii48bzk.css';
import '../../css/t/t8bp0tbiu.css';
import '../../css/w/w12chrxcq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fzii48bzk"/><path class="t8bp0tbiu"/><path class="w12chrxcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:music-notes-off"} {...others} />);
}

export default Component;
