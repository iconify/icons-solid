import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8rm0wp9j.css';
import '../../css/u/uvhgt6hxi.css';
import '../../css/i/im4602b5a.css';
import '../../css/d/d_o_nwmnr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d8rm0wp9j"/><path class="uvhgt6hxi"/><path class="im4602b5a"/><path clip-rule="evenodd" class="d_o_nwmnr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:app-window-layout"} {...others} />);
}

export default Component;
