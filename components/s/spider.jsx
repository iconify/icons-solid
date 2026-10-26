import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/xv7xeubyi.css';
import '../../css/l/lox2hi3vo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="xv7xeubyi"/><path class="lox2hi3vo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:spider"} {...others} />);
}

export default Component;
