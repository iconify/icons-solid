import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/i_nn78b8y.css';
import '../../css/r/rh9ys1c9s.css';
import '../../css/a/aee12cano.css';
import '../../css/o/otsbvqg0u.css';
import '../../css/q/qeq5uccqz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="i_nn78b8y"/><path class="rh9ys1c9s"/><path class="aee12cano"/><path class="otsbvqg0u"/><path class="qeq5uccqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:store-2"} {...others} />);
}

export default Component;
