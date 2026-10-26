import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/q/q_93qobtu.css';
import '../../css/o/ogogkhbdn.css';
import '../../css/e/e425vyb8k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="q_93qobtu"/><path class="ogogkhbdn"/><path class="e425vyb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:cupcake"} {...others} />);
}

export default Component;
