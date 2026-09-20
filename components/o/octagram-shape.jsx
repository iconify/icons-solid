import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w-gdv-r7f.css';
import '../../css/u/u2t-ltb8n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="w-gdv-r7f"/><path class="u2t-ltb8n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:octagram-shape"} {...others} />);
}

export default Component;
