import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/g/gjg3sybli.css';
import '../../css/d/dcsigzbjh.css';
import '../../css/d/dsfcorb1g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="gjg3sybli"/><path class="dcsigzbjh"/><path class="dsfcorb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:laptop"} {...others} />);
}

export default Component;
