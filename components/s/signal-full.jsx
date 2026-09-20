import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/r6bgobbwr.css';
import '../../css/n/nkvpf2b8t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="r6bgobbwr"/><path class="nkvpf2b8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:signal-full"} {...others} />);
}

export default Component;
