import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/t08-f-bzw.css';
import '../../css/o/o1n09ou_i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="t08-f-bzw"/><path class="o1n09ou_i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:bookmark"} {...others} />);
}

export default Component;
