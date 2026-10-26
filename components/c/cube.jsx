import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/sdc6ipbtp.css';
import '../../css/y/ykol-_blb.css';
import '../../css/r/r2lhtab-a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="sdc6ipbtp"/><path class="ykol-_blb"/><path class="r2lhtab-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:cube"} {...others} />);
}

export default Component;
