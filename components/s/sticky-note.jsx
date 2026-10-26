import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zjla2hdpl.css';
import '../../css/p/p-yl1xbny.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="zjla2hdpl"/><path class="p-yl1xbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:sticky-note"} {...others} />);
}

export default Component;
