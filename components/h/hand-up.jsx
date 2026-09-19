import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/o/op3inpbug.css';
import '../../css/p/puckv5bwn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="op3inpbug"/><path clip-rule="evenodd" class="puckv5bwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hand-up"} {...others} />);
}

export default Component;
