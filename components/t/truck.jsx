import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/dj9_tyb7m.css';
import '../../css/q/qncl_qede.css';
import '../../css/o/omwsw723m.css';
import '../../css/f/fv-pjvbpq.css';
import '../../css/t/ta_qveboq.css';
import '../../css/w/wjxdsob9d.css';
import '../../css/g/g4753bbfg.css';
import '../../css/v/vy3su6-cx.css';
import '../../css/v/v8uuk6b0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="dj9_tyb7m"/><path class="qncl_qede"/><path class="omwsw723m"/><path class="fv-pjvbpq wm-shine"/><path class="ta_qveboq wm-k"/><path class="wjxdsob9d wm-a"/><path class="g4753bbfg"/><path class="vy3su6-cx"/><path class="v8uuk6b0y wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:truck"} {...others} />);
}

export default Component;
