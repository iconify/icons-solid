import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a84w5w82q.css';
import '../../css/o/ox_f34bge.css';
import '../../css/q/qvy0wgbpm.css';
import '../../css/e/eeuhyccnw.css';
import '../../css/t/tjoxqhb0r.css';
import '../../css/s/s5b9_qb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a84w5w82q wm-k"/><path class="ox_f34bge wm-k"/><path class="qvy0wgbpm wm-k"/><path class="eeuhyccnw wm-a"/><path class="tjoxqhb0r wm-a"/><path class="s5b9_qb5q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:indian-rupee"} {...others} />);
}

export default Component;
