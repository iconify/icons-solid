import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqsudsbwb.css';
import '../../css/p/p-ergr5en.css';
import '../../css/o/oeyhvroag.css';
import '../../css/f/fpmq3fgfo.css';
import '../../css/w/wbrw7cc1u.css';
import '../../css/w/w2tkf130b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uqsudsbwb wm-k"/><path class="p-ergr5en wm-k"/><path class="oeyhvroag wm-k"/><path class="fpmq3fgfo wm-k"/><path class="wbrw7cc1u wm-shine"/><path class="w2tkf130b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:clipboard-plus"} {...others} />);
}

export default Component;
