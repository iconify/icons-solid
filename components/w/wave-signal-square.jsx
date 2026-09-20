import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kd1xldbgq.css';
import '../../css/c/copwssbpe.css';
import '../../css/b/b-od7uhdd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kd1xldbgq"/><path class="copwssbpe"/><path class="b-od7uhdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:wave-signal-square"} {...others} />);
}

export default Component;
