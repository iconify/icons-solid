import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nvfwybbpi.css';
import '../../css/p/paqfsmbkx.css';
import '../../css/w/w3yj63bfm.css';
import '../../css/u/u4i-b5b-f.css';
import '../../css/j/j0fiiccut.css';
import '../../css/t/tbu5grbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nvfwybbpi wm-k"/><path class="paqfsmbkx wm-k"/><path class="w3yj63bfm wm-k"/><path class="u4i-b5b-f wm-a"/><path class="j0fiiccut wm-a"/><path class="tbu5grbmr wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:split"} {...others} />);
}

export default Component;
