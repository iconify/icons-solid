import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lzttcq10q.css';
import '../../css/g/g_3i-5a_q.css';
import '../../css/b/bbj5cibiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="lzttcq10q"/><path class="g_3i-5a_q wm-a"/><path class="bbj5cibiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:banknote-duo"} {...others} />);
}

export default Component;
