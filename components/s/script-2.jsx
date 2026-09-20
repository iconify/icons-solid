import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/dq43fsdop.css';
import '../../css/t/tnqztbqpk.css';
import '../../css/r/regsugbhf.css';
import '../../css/v/vhf7n_97t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="dq43fsdop"/><path class="tnqztbqpk"/><path class="regsugbhf"/><path class="vhf7n_97t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:script-2"} {...others} />);
}

export default Component;
