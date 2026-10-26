import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/b/bg8-v92az.css';
import '../../css/g/gsns-ke1i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="bg8-v92az"/><path class="gsns-ke1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:heart-arrow"} {...others} />);
}

export default Component;
