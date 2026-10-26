import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/w/w35xd2bpf.css';
import '../../css/t/t3-867aqn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="w35xd2bpf"/><path class="t3-867aqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:clipboard"} {...others} />);
}

export default Component;
