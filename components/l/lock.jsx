import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/i/ivqxe_byo.css';
import '../../css/u/uhn9h5jxa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ivqxe_byo"/><path class="uhn9h5jxa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:lock"} {...others} />);
}

export default Component;
