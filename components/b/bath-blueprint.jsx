import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y-9ud7ldi.css';
import '../../css/c/cfi98zf-t.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/u/ukw3xqbut.css';
import '../../css/u/upmg54wmj.css';
import '../../css/w/wc3_as06n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y-9ud7ldi"/><path class="cfi98zf-t wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="ukw3xqbut wm-k"/><path class="upmg54wmj wm-a"/><path class="wc3_as06n wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bath-blueprint"} {...others} />);
}

export default Component;
