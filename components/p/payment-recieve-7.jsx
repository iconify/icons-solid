import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/aruvd4bws.css';
import '../../css/q/qfjfqhbkb.css';
import '../../css/t/tuf-0zb4e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="aruvd4bws"/><path class="qfjfqhbkb"/><path class="tuf-0zb4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:payment-recieve-7"} {...others} />);
}

export default Component;
