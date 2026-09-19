import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/n_z5md42q.css';
import '../../css/j/j7j-p3g_y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="n_z5md42q"/><path class="j7j-p3g_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:harm"} {...others} />);
}

export default Component;
