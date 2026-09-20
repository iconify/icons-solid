import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dwkz87bar.css';
import '../../css/a/a8i80jb2p.css';
import '../../css/m/mf_dhvsrk.css';
import '../../css/f/fnjfdobhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="dwkz87bar"/><path class="a8i80jb2p"/><path class="mf_dhvsrk"/><path class="fnjfdobhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:globe-filled"} {...others} />);
}

export default Component;
