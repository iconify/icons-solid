import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iaj-w6hom.css';
import '../../css/y/yxrtfmbgr.css';
import '../../css/y/y8y0tmbno.css';
import '../../css/k/kktqh6gzb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="iaj-w6hom"/><path class="yxrtfmbgr"/><path class="y8y0tmbno"/><path class="kktqh6gzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:notepad-text"} {...others} />);
}

export default Component;
