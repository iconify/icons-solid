import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w35xd2bpf.css';
import '../../css/k/kcy_i3zwf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="w35xd2bpf"/><path class="kcy_i3zwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:clipboard-check"} {...others} />);
}

export default Component;
