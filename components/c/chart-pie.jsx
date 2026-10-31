import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v05reb1rp.css';
import '../../css/y/yolx7qcum.css';
import '../../css/g/gedrd3j4f.css';
import '../../css/q/q_5tk_bqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v05reb1rp"/><path class="wm-shine yolx7qcum"/><path class="gedrd3j4f wm-k"/><path class="q_5tk_bqn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-pie"} {...others} />);
}

export default Component;
