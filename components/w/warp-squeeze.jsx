import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/skyd54b2s.css';
import '../../css/c/czoh3luyr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="skyd54b2s"/><path class="czoh3luyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:warp-squeeze"} {...others} />);
}

export default Component;
