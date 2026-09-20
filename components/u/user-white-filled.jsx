import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vs-iz_bnz.css';
import '../../css/x/xpx-tzx3i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="vs-iz_bnz"/><path clip-rule="evenodd" class="xpx-tzx3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:user-white-filled"} {...others} />);
}

export default Component;
