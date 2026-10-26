import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/litft91pl.css';
import '../../css/l/lf1g4p6ze.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="litft91pl"/><path class="lf1g4p6ze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:smile"} {...others} />);
}

export default Component;
