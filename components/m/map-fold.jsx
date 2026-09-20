import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hdvc23b0q.css';
import '../../css/o/ogvlz6bci.css';
import '../../css/n/nmuulvb3e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hdvc23b0q"/><path class="ogvlz6bci"/><path class="nmuulvb3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:map-fold"} {...others} />);
}

export default Component;
