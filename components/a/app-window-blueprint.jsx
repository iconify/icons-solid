import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yhaiccbkb.css';
import '../../css/g/g2xclxbug.css';
import '../../css/e/e_vgx2bxs.css';
import '../../css/g/g136touho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yhaiccbkb"/><path class="g2xclxbug wm-deco"/><path class="e_vgx2bxs wm-k"/><path class="g136touho wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:app-window-blueprint"} {...others} />);
}

export default Component;
