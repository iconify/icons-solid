import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/x/xgu2_6bfp.css';
import '../../css/y/yv9b36bbw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="xgu2_6bfp"/><path class="yv9b36bbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:eraser"} {...others} />);
}

export default Component;
