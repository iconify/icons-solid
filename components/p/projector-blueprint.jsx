import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xlsrwfbva.css';
import '../../css/l/ldpgispni.css';
import '../../css/v/v5jdyxbhx.css';
import '../../css/e/epgciubws.css';
import '../../css/x/xaf6cob8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xlsrwfbva"/><path class="ldpgispni wm-deco"/><path class="v5jdyxbhx wm-deco"/><path class="epgciubws wm-k"/><path class="wm-a xaf6cob8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:projector-blueprint"} {...others} />);
}

export default Component;
