import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oiy2qljci.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/e/ekeyfud6d.css';
import '../../css/g/gkdghs3sr.css';
import '../../css/h/h4x2644fl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="oiy2qljci wm-deco"/><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="ekeyfud6d wm-k"/><path class="gkdghs3sr wm-a"/><path class="h4x2644fl wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-handshake-blueprint"} {...others} />);
}

export default Component;
