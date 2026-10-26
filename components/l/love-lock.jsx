import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/t/t_oef6bgs.css';
import '../../css/i/idvk68b8w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="t_oef6bgs"/><path class="idvk68b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:love-lock"} {...others} />);
}

export default Component;
