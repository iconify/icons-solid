import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q1vcoot1c.css';
import '../../css/b/b2ast7ugh.css';
import '../../css/f/ftjw_jb1r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q1vcoot1c"/><path class="b2ast7ugh"/><path clip-rule="evenodd" class="ftjw_jb1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:thyroid-outline"} {...others} />);
}

export default Component;
