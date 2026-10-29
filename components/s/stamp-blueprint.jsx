import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u_yrg3bqj.css';
import '../../css/z/zc1-k1bwf.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/s/szu58q-yo.css';
import '../../css/q/qv4e6yckx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="u_yrg3bqj wm-deco"/><path class="wm-deco zc1-k1bwf"/><path class="o7-ag87sb wm-deco"/><path class="szu58q-yo wm-k"/><path class="qv4e6yckx wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:stamp-blueprint"} {...others} />);
}

export default Component;
