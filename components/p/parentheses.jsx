import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hyi0qdb7p.css';
import '../../css/b/b0t6qjswe.css';
import '../../css/q/q6m2x4bqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hyi0qdb7p wm-k"/><path class="b0t6qjswe wm-k"/><path class="q6m2x4bqi wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:parentheses"} {...others} />);
}

export default Component;
