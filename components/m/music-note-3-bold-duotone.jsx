import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bo9s6z0nt.css';
import '../../css/c/c34-z67ei.css';
import '../../css/l/lk6osub0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bo9s6z0nt"/><path class="c34-z67ei"/><path class="lk6osub0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:music-note-3-bold-duotone"} {...others} />);
}

export default Component;
