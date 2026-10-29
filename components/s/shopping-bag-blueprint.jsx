import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x4rgxab-s.css';
import '../../css/w/w0x38w6rx.css';
import '../../css/h/hulygx1ln.css';
import '../../css/u/uhc76--hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco x4rgxab-s"/><path class="w0x38w6rx wm-deco"/><path class="hulygx1ln wm-k"/><path class="uhc76--hq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shopping-bag-blueprint"} {...others} />);
}

export default Component;
