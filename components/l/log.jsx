import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xgnraixwd.css';
import '../../css/j/jsdifkdbk.css';
import '../../css/l/lub1h9ltp.css';
import '../../css/s/skjtdwb1m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="xgnraixwd"/><path class="jsdifkdbk"/><path class="lub1h9ltp"/><path class="skjtdwb1m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:log"} {...others} />);
}

export default Component;
