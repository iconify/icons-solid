import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/w8b12n5qt.css';
import '../../css/w/w399e3bjc.css';
import '../../css/f/f5bw1sbux.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="w8b12n5qt"/><path class="w399e3bjc"/><path class="f5bw1sbux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:pyramid-shape"} {...others} />);
}

export default Component;
