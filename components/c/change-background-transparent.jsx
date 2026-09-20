import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/ey-x46a9w.css';
import '../../css/w/wyr41hl5r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="ey-x46a9w"/><path class="wyr41hl5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:change-background-transparent"} {...others} />);
}

export default Component;
