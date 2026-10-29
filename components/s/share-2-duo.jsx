import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mtv0-bc_o.css';
import '../../css/m/mit9yg-2j.css';
import '../../css/p/pg9_vdbco.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mtv0-bc_o"/><path class="mit9yg-2j wm-a"/><path class="pg9_vdbco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:share-2-duo"} {...others} />);
}

export default Component;
