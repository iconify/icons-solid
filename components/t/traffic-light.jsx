import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/waaq9zb6u.css';
import '../../css/p/p7j7-kiek.css';
import '../../css/j/jkbmv5baa.css';
import '../../css/a/a0omlzbdi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="waaq9zb6u"/><path class="p7j7-kiek"/><path class="jkbmv5baa"/><path class="a0omlzbdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:traffic-light"} {...others} />);
}

export default Component;
