import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmtbiq4iv.css';
import '../../css/w/wmbt88n4x.css';
import '../../css/q/q3fonv9pj.css';
import '../../css/v/viki5hbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mmtbiq4iv"/><path class="wmbt88n4x"/><path class="q3fonv9pj"/><path class="viki5hbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:watch-round-bold-duotone"} {...others} />);
}

export default Component;
