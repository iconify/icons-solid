import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/w/w5facebne.css';
import '../../css/e/ea-wkh45t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="w5facebne"/><path class="ea-wkh45t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:node-hardware-outline"} {...others} />);
}

export default Component;
