import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x33a2fb3q.css';
import '../../css/b/b3ikrzbhg.css';
import '../../css/h/h52lkaysi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="x33a2fb3q"/><path class="b3ikrzbhg"/><path class="h52lkaysi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:book-1"} {...others} />);
}

export default Component;
