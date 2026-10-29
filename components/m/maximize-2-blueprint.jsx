import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pjfvu7rlw.css';
import '../../css/b/bxjv56brc.css';
import '../../css/j/jdk8orm8z.css';
import '../../css/y/y822yac6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="pjfvu7rlw wm-deco"/><path class="bxjv56brc wm-deco"/><path class="jdk8orm8z"/><path class="y822yac6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:maximize-2-blueprint"} {...others} />);
}

export default Component;
