import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t8548ccls.css';
import '../../css/j/j9-_k7azr.css';
import '../../css/v/vy1edcjcy.css';
import '../../css/i/i896y_g_v.css';
import '../../css/e/ejenypbtq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="t8548ccls"/><path class="j9-_k7azr"/><path class="vy1edcjcy"/><path class="i896y_g_v"/><path class="ejenypbtq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:data-file-graph"} {...others} />);
}

export default Component;
