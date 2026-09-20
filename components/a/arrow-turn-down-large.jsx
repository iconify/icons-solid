import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/q/qn96kulft.css';
import '../../css/y/yicma6b6o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="qn96kulft"/><path class="yicma6b6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:arrow-turn-down-large"} {...others} />);
}

export default Component;
