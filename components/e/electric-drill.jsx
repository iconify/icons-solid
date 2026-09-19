import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/l/lu8ljbbxs.css';
import '../../css/f/faid8ja0u.css';
import '../../css/i/izth8wb4y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="lu8ljbbxs"/><path class="faid8ja0u"/><path class="izth8wb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:electric-drill"} {...others} />);
}

export default Component;
