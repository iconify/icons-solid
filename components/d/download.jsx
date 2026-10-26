import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/d/dgxqcjigj.css';
import '../../css/z/z5l4z6b7y.css';
import '../../css/w/w63xf2g_k.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="dgxqcjigj"/><path class="z5l4z6b7y"/><path class="w63xf2g_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:download"} {...others} />);
}

export default Component;
