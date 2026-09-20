import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b7t7ibc2v.css';
import '../../css/h/htb6pgboo.css';
import '../../css/m/mvi-sobpr.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="b7t7ibc2v"/><path class="htb6pgboo"/><path class="mvi-sobpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fish"} {...others} />);
}

export default Component;
