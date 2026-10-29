import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l3jgcybau.css';
import '../../css/n/nbj7ro57z.css';
import '../../css/k/kjq20lbyg.css';
import '../../css/h/h2our83dc.css';
import '../../css/x/xdwdw1wlj.css';
import '../../css/s/snig7ubjb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="l3jgcybau wm-deco"/><path class="nbj7ro57z wm-deco"/><path class="kjq20lbyg wm-k"/><path class="h2our83dc wm-a"/><path class="wm-k xdwdw1wlj"/><path class="snig7ubjb wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-down-to-line-blueprint"} {...others} />);
}

export default Component;
