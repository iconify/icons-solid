import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_miejdym.css';
import '../../css/p/pf2-_rb0u.css';
import '../../css/j/jqsr1c1oo.css';
import '../../css/j/j39u55f1q.css';
import '../../css/s/s-spah6_d.css';
import '../../css/m/mn3k6sr3d.css';
import '../../css/c/co9jpsbnu.css';
import '../../css/c/cuu2pkb5f.css';
import '../../css/z/zc565kb4d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j_miejdym wm-shadow"/><path class="pf2-_rb0u wm-shadow"/><path class="jqsr1c1oo"/><path class="j39u55f1q"/><path class="s-spah6_d"/><path class="mn3k6sr3d"/><path class="co9jpsbnu wm-shine"/><path class="cuu2pkb5f wm-shine"/><path class="zc565kb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:bitcoin"} {...others} />);
}

export default Component;
