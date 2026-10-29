import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/e/e2vy_fbou.css';
import '../../css/n/n01n1no-u.css';
import '../../css/f/f5y5yab_n.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="e2vy_fbou"/><path class="n01n1no-u"/><path class="f5y5yab_n wm-shine"/><path class="ug799plhe wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:file-chart"} {...others} />);
}

export default Component;
