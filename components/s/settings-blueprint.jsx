import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gkbnqopzy.css';
import '../../css/t/tr-w3jb8b.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/h/h1-1v8b2z.css';
import '../../css/w/wh0zujbon.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="gkbnqopzy wm-deco"/><path class="tr-w3jb8b wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="h1-1v8b2z wm-k"/><path class="wh0zujbon wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:settings-blueprint"} {...others} />);
}

export default Component;
