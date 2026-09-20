import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/c/casar-aqm.css';
import '../../css/a/acxkbz-0d.css';
import '../../css/n/npc7mnbwl.css';
import '../../css/r/roy8o9bjt.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="casar-aqm"/><path class="acxkbz-0d"/><path class="npc7mnbwl"/><path class="roy8o9bjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:vscode-light"} {...others} />);
}

export default Component;
