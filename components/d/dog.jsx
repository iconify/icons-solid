import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/c/cjx6dubxh.css';
import '../../css/q/q3a36wbuh.css';
import '../../css/u/uekv0cbru.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="cjx6dubxh"/><path class="q3a36wbuh"/><path class="uekv0cbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:dog"} {...others} />);
}

export default Component;
