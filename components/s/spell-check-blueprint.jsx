import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xr5c3ghmd.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/w/wjickybsq.css';
import '../../css/j/jtxdyz-8m.css';
import '../../css/h/h2nsrzbka.css';
import '../../css/t/tnxjhbc_p.css';
import '../../css/n/nvq1v8c1p.css';
import '../../css/c/c9f20lbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco xr5c3ghmd"/><path class="o7-ag87sb wm-deco"/><path class="wjickybsq wm-k"/><path class="jtxdyz-8m wm-a"/><path class="h2nsrzbka wm-s"/><path class="tnxjhbc_p wm-k"/><path class="nvq1v8c1p wm-a"/><path class="c9f20lbpj wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spell-check-blueprint"} {...others} />);
}

export default Component;
