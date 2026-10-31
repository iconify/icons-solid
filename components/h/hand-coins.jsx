import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/ws4_u1c6h.css';
import '../../css/a/ax6utlbeh.css';
import '../../css/b/b9nc3-f7s.css';
import '../../css/h/hrj033bnp.css';
import '../../css/k/kwr1fbbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow ws4_u1c6h"/><path class="ax6utlbeh wm-shadow"/><path class="b9nc3-f7s"/><path class="hrj033bnp"/><path class="kwr1fbbur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:hand-coins"} {...others} />);
}

export default Component;
