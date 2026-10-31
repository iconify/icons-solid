import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yngcailry.css';
import '../../css/e/ehy-hob-d.css';
import '../../css/t/tv-5nyb5r.css';
import '../../css/a/ab8bavvap.css';
import '../../css/y/yu3ja9btn.css';
import '../../css/o/o4kb2accc.css';
import '../../css/a/au9q_1b4v.css';
import '../../css/b/bo3qev4sb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yngcailry"/><path class="ehy-hob-d"/><path class="tv-5nyb5r wm-shine"/><path class="ab8bavvap wm-k"/><path class="wm-a yu3ja9btn"/><path class="o4kb2accc"/><path class="au9q_1b4v"/><path class="bo3qev4sb wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bot-message-square"} {...others} />);
}

export default Component;
