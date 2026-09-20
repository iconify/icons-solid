import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/uycvevb2b.css';
import '../../css/p/pk8cajbbu.css';
import '../../css/w/w0ywbtewy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="uycvevb2b"/><path class="pk8cajbbu"/><path class="w0ywbtewy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:charging"} {...others} />);
}

export default Component;
