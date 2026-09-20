import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs1s4bb3o.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/f5f0jwb-w.css';
import '../../css/g/gqdhlkbho.css';
import '../../css/d/d8_onbakg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fs1s4bb3o"/><g class="mc2zb0bvp"><path class="f5f0jwb-w"/><path class="gqdhlkbho"/><path class="d8_onbakg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:benzene-ring-bold-duotone"} {...others} />);
}

export default Component;
