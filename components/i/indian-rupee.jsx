import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys-kpohii.css';
import '../../css/g/gwkh9hb-c.css';
import '../../css/r/r6-xr0tdo.css';
import '../../css/c/cssruab1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k ys-kpohii"/><path class="gwkh9hb-c wm-deco"/><path class="r6-xr0tdo wm-k"/><path class="cssruab1r wm-shadow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:indian-rupee"} {...others} />);
}

export default Component;
