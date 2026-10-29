import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nmw4e_-1p.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/i/ih5ukqcla.css';
import '../../css/d/digmi6b5l.css';
import '../../css/k/k-z3g5b2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="nmw4e_-1p wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="ih5ukqcla wm-k"/><path class="digmi6b5l wm-a"/><path class="k-z3g5b2i wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contact-blueprint"} {...others} />);
}

export default Component;
