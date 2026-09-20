import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lr2d1s2io.css';
import '../../css/i/id_7j0f5l.css';
import '../../css/v/vbfivjm2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="lr2d1s2io"/><path class="id_7j0f5l"/><path class="vbfivjm2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:database-bold-duotone"} {...others} />);
}

export default Component;
