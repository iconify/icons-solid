import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v6lu6-pan.css';
import '../../css/k/k5raeubzg.css';
import '../../css/l/lfzj22qgn.css';
import '../../css/j/jy3c7oi9w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="v6lu6-pan wm-deco"/><path class="k5raeubzg wm-deco"/><path class="lfzj22qgn wm-k"/><path class="jy3c7oi9w wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:banknote-blueprint"} {...others} />);
}

export default Component;
