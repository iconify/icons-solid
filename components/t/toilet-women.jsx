import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/l/lx8mxob_q.css';
import '../../css/p/pg21wkb4v.css';
import '../../css/c/czfh67b3i.css';
import '../../css/r/rw5054bha.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="lx8mxob_q"/><path class="pg21wkb4v"/><path class="czfh67b3i"/><path class="rw5054bha"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:toilet-women"} {...others} />);
}

export default Component;
