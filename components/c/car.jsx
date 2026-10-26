import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/n/nr391wbkf.css';
import '../../css/w/wf6mg6b8p.css';
import '../../css/l/l3-io0b4c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="nr391wbkf"/><path class="wf6mg6b8p"/><path class="l3-io0b4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:car"} {...others} />);
}

export default Component;
