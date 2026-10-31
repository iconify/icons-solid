import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f667w6b2q.css';
import '../../css/d/d-2zqeb9r.css';
import '../../css/r/rcorzpbks.css';
import '../../css/j/jmvv3kbnk.css';
import '../../css/y/ykqnlnbbe.css';
import '../../css/y/ywy09jdem.css';
import '../../css/x/xt9ybvbkg.css';
import '../../css/m/muscrkzvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="f667w6b2q"/><path class="d-2zqeb9r"/><path class="rcorzpbks wm-shine"/><path class="jmvv3kbnk wm-k"/><path class="wm-a ykqnlnbbe"/><path class="ywy09jdem"/><path class="xt9ybvbkg"/><path class="muscrkzvf wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:calendar"} {...others} />);
}

export default Component;
