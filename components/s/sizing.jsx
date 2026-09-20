import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/s5acyd9-p.css';
import '../../css/k/kkpqd3b9r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="s5acyd9-p"/><path class="kkpqd3b9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:sizing"} {...others} />);
}

export default Component;
