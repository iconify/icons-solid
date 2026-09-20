import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q975urp9a.css';
import '../../css/x/xvglmac6q.css';
import '../../css/a/azix8qb6k.css';
import '../../css/q/qrmgg4bfs.css';
import '../../css/i/inmdk1bna.css';
import '../../css/a/a5lqa051s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="q975urp9a"/><path clip-rule="evenodd" class="xvglmac6q"/><path class="azix8qb6k"/><path class="qrmgg4bfs"/><path class="inmdk1bna"/><path class="a5lqa051s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:school-bus-side"} {...others} />);
}

export default Component;
